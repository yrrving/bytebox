/// <reference lib="webworker" />
/* eslint-disable @typescript-eslint/no-explicit-any */
// Runs Whisper speech-to-text entirely on the user's device.
// The model is downloaded once from the Hugging Face CDN and cached by the
// browser (Cache Storage). After that the audio never leaves the machine.
import { pipeline, env } from '@huggingface/transformers'

// Never look for a local model server — always use the cached/CDN model.
env.allowLocalModels = false

let transcriber: any = null
let loadedModel = ''

// Whisper (especially the "tiny" model on long, quiet audio — e.g. a mic-only
// recording of a digital meeting, which is mostly silence from the other side)
// is prone to degenerate repetition loops: the same word, phrase or short
// token run repeated dozens or hundreds of times. no_repeat_ngram_size below
// helps prevent it during decoding; these two passes clean up what still gets
// through, without touching non-repeating (real) text.

// Collapses a short substring immediately repeated many times with no
// separator, e.g. "3.3.3.3.3..." or "e.e.e.e.e...".
function collapseCharRepeats(text: string): string {
  return text.replace(/(.{1,8}?)\1{4,}/g, '$1')
}

function sameWords(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((w, i) => w.toLowerCase() === b[i].toLowerCase())
}

// Collapses a run of the same word or short phrase repeated 3+ times in a
// row (word-level, so it also catches phrase loops like "Det är en viktig
// moment. Det är en viktig moment. ..." split across sentences).
function collapseWordRepeats(text: string, maxN = 12, minRepeats = 3): string {
  const words = text.split(/\s+/).filter(Boolean)
  const out: string[] = []
  let i = 0
  while (i < words.length) {
    let collapsed = false
    for (let n = Math.min(maxN, words.length - i); n >= 1; n--) {
      let repeats = 1
      while (
        i + (repeats + 1) * n <= words.length &&
        sameWords(words.slice(i + repeats * n, i + (repeats + 1) * n), words.slice(i, i + n))
      ) {
        repeats++
      }
      if (repeats >= minRepeats) {
        out.push(...words.slice(i, i + n))
        i += repeats * n
        collapsed = true
        break
      }
    }
    if (!collapsed) {
      out.push(words[i])
      i++
    }
  }
  return out.join(' ')
}

function cleanTranscript(text: string): string {
  return collapseWordRepeats(collapseCharRepeats(text))
}

async function getTranscriber(model: string) {
  if (transcriber && loadedModel === model) return transcriber
  transcriber = await pipeline('automatic-speech-recognition', model, {
    progress_callback: (p: any) => self.postMessage({ type: 'progress', data: p }),
  })
  loadedModel = model
  return transcriber
}

self.onmessage = async (e: MessageEvent) => {
  if (e.data?.type !== 'transcribe') return
  const { audio, model, language } = e.data as {
    audio: Float32Array
    model: string
    language?: string
  }
  try {
    const asr = await getTranscriber(model)
    self.postMessage({ type: 'status', status: 'transcribing' })
    const output: any = await asr(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      return_timestamps: true,
      no_repeat_ngram_size: 3,
      ...(language ? { language, task: 'transcribe' } : {}),
    })

    const rawText = (output?.text ?? '').trim()
    const text = cleanTranscript(rawText)
    const chunks = (Array.isArray(output?.chunks) ? output.chunks : []).map((c: any) => ({
      ...c,
      text: cleanTranscript((c?.text ?? '').trim()),
    }))
    // Flag it for the UI if cleanup removed a meaningful amount — most likely a
    // repetition loop, not just whitespace normalization.
    const cleaned = rawText.length - text.length > 20

    self.postMessage({ type: 'result', text, chunks, cleaned })
  } catch (err: any) {
    self.postMessage({ type: 'error', message: err?.message ?? String(err) })
  }
}
