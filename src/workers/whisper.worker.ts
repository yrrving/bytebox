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
      ...(language ? { language, task: 'transcribe' } : {}),
    })
    self.postMessage({
      type: 'result',
      text: (output?.text ?? '').trim(),
      chunks: Array.isArray(output?.chunks) ? output.chunks : [],
    })
  } catch (err: any) {
    self.postMessage({ type: 'error', message: err?.message ?? String(err) })
  }
}
