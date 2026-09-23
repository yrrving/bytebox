import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'

const Journal = lazy(() => import('./pages/Journal'))

const QrCodeTool = lazy(() => import('./pages/tools/QrCode'))
const ColorPalette = lazy(() => import('./pages/tools/ColorPalette'))
const ImageCompressor = lazy(() => import('./pages/tools/ImageCompressor'))
const TextToSpeech = lazy(() => import('./pages/tools/TextToSpeech'))
const PngToSvg = lazy(() => import('./pages/tools/PngToSvg'))
const MediaConverter = lazy(() => import('./pages/tools/MediaConverter'))
const EmbroideryViewer = lazy(() => import('./pages/tools/EmbroideryViewer'))
const AsciiArt = lazy(() => import('./pages/tools/AsciiArt'))
const ImageCropper = lazy(() => import('./pages/tools/ImageCropper'))
const CutFileGenerator = lazy(() => import('./pages/tools/CutFileGenerator'))
const PdfTools = lazy(() => import('./pages/tools/PdfTools'))
const OcrTool = lazy(() => import('./pages/tools/OcrTool'))
const BackgroundRemover = lazy(() => import('./pages/tools/BackgroundRemover'))
const HeicConverter = lazy(() => import('./pages/tools/HeicConverter'))
const MetadataCleaner = lazy(() => import('./pages/tools/MetadataCleaner'))
const SrtEditor = lazy(() => import('./pages/tools/SrtEditor'))
const WordProcessor = lazy(() => import('./pages/tools/WordProcessor'))
const AudioTrimmer = lazy(() => import('./pages/tools/AudioTrimmer'))
const VideoToGif = lazy(() => import('./pages/tools/VideoToGif'))
const Traincells = lazy(() => import('./pages/tools/Traincells'))
const Padgrid = lazy(() => import('./pages/tools/Padgrid'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/qr-kod" element={<QrCodeTool />} />
          <Route path="/fargpalett" element={<ColorPalette />} />
          <Route path="/bildkomprimering" element={<ImageCompressor />} />
          <Route path="/text-till-tal" element={<TextToSpeech />} />
          <Route path="/png-till-svg" element={<PngToSvg />} />
          <Route path="/mediakonverterare" element={<MediaConverter />} />
          <Route path="/brodyrkortsvisare" element={<EmbroideryViewer />} />
          <Route path="/ascii-konst" element={<AsciiArt />} />
          <Route path="/bildbeskärare" element={<ImageCropper />} />
          <Route path="/skarfilsgenerator" element={<CutFileGenerator />} />
          <Route path="/pdf-verktyg" element={<PdfTools />} />
          <Route path="/ocr" element={<OcrTool />} />
          <Route path="/bakgrundsborttagare" element={<BackgroundRemover />} />
          <Route path="/heic-till-jpg" element={<HeicConverter />} />
          <Route path="/metadata-tvatt" element={<MetadataCleaner />} />
          {/* Batch-QR är numera en flik i QR-verktyget. Gamla länkar ska inte dö */}
          <Route path="/batch-qr" element={<Navigate to="/qr-kod" replace />} />
          <Route path="/srt-redigerare" element={<SrtEditor />} />
          <Route path="/ljudklipp" element={<AudioTrimmer />} />
          <Route path="/video-till-gif" element={<VideoToGif />} />
          <Route path="/traincells" element={<Traincells />} />
          <Route path="/padgrid" element={<Padgrid />} />
          <Route path="/ordbehandlare" element={<WordProcessor />} />
          <Route path="/:slug" element={<Placeholder />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
