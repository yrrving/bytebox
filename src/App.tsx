import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'

const Journal = lazy(() => import('./pages/Journal'))

const PasswordGenerator = lazy(() => import('./pages/tools/PasswordGenerator'))
const TextTools = lazy(() => import('./pages/tools/TextTools'))
const JsonFormatter = lazy(() => import('./pages/tools/JsonFormatter'))
const Base64Encoder = lazy(() => import('./pages/tools/Base64Encoder'))
const HashGenerator = lazy(() => import('./pages/tools/HashGenerator'))
const RegexTester = lazy(() => import('./pages/tools/RegexTester'))
const QrCodeTool = lazy(() => import('./pages/tools/QrCode'))
const KeyboardTester = lazy(() => import('./pages/tools/KeyboardTester'))
const UnitConverter = lazy(() => import('./pages/tools/UnitConverter'))
const ColorPalette = lazy(() => import('./pages/tools/ColorPalette'))
const MarkdownPreview = lazy(() => import('./pages/tools/MarkdownPreview'))
const ImageCompressor = lazy(() => import('./pages/tools/ImageCompressor'))
const TimeZones = lazy(() => import('./pages/tools/TimeZones'))
const FileAnalyzer = lazy(() => import('./pages/tools/FileAnalyzer'))
const IpInfo = lazy(() => import('./pages/tools/IpInfo'))
const TextToSpeech = lazy(() => import('./pages/tools/TextToSpeech'))
const MeetingTranscriber = lazy(() => import('./pages/tools/MeetingTranscriber'))
const PngToSvg = lazy(() => import('./pages/tools/PngToSvg'))
const RulerTool = lazy(() => import('./pages/tools/RulerTool'))
const Translator = lazy(() => import('./pages/tools/Translator'))
const BandwidthTest = lazy(() => import('./pages/tools/BandwidthTest'))
const MediaConverter = lazy(() => import('./pages/tools/MediaConverter'))
const EmbroideryViewer = lazy(() => import('./pages/tools/EmbroideryViewer'))
const Calculator = lazy(() => import('./pages/tools/Calculator'))
const PercentCalc = lazy(() => import('./pages/tools/PercentCalc'))
const RandomNumber = lazy(() => import('./pages/tools/RandomNumber'))
const Stopwatch = lazy(() => import('./pages/tools/Stopwatch'))
const CountdownTimer = lazy(() => import('./pages/tools/CountdownTimer'))
const PomodoroTimer = lazy(() => import('./pages/tools/PomodoroTimer'))
const RandomPicker = lazy(() => import('./pages/tools/RandomPicker'))
const LoremIpsum = lazy(() => import('./pages/tools/LoremIpsum'))
const Metronome = lazy(() => import('./pages/tools/Metronome'))
const UserAgentInfo = lazy(() => import('./pages/tools/UserAgentInfo'))
const JwtDecoder = lazy(() => import('./pages/tools/JwtDecoder'))
const CronParser = lazy(() => import('./pages/tools/CronParser'))
const CsvJson = lazy(() => import('./pages/tools/CsvJson'))
const DiffCompare = lazy(() => import('./pages/tools/DiffCompare'))
const WhiteNoise = lazy(() => import('./pages/tools/WhiteNoise'))
const PitchDetector = lazy(() => import('./pages/tools/PitchDetector'))
const CodeMinifier = lazy(() => import('./pages/tools/CodeMinifier'))
const CssGradient = lazy(() => import('./pages/tools/CssGradient'))
const AsciiArt = lazy(() => import('./pages/tools/AsciiArt'))
const DnsLookup = lazy(() => import('./pages/tools/DnsLookup'))
const SslCheck = lazy(() => import('./pages/tools/SslCheck'))
const HttpHeaders = lazy(() => import('./pages/tools/HttpHeaders'))
const FaviconGenerator = lazy(() => import('./pages/tools/FaviconGenerator'))
const ImageCropper = lazy(() => import('./pages/tools/ImageCropper'))
const ImageCollage = lazy(() => import('./pages/tools/ImageCollage'))
const PixelCounter = lazy(() => import('./pages/tools/PixelCounter'))
const CutFileGenerator = lazy(() => import('./pages/tools/CutFileGenerator'))
const PdfTools = lazy(() => import('./pages/tools/PdfTools'))
const OcrTool = lazy(() => import('./pages/tools/OcrTool'))
const BackgroundRemover = lazy(() => import('./pages/tools/BackgroundRemover'))
const HeicConverter = lazy(() => import('./pages/tools/HeicConverter'))
const MetadataCleaner = lazy(() => import('./pages/tools/MetadataCleaner'))
const PassportPhoto = lazy(() => import('./pages/tools/PassportPhoto'))
const StickerSheet = lazy(() => import('./pages/tools/StickerSheet'))
const BatchQr = lazy(() => import('./pages/tools/BatchQr'))
const SvgOptimizer = lazy(() => import('./pages/tools/SvgOptimizer'))
const SrtEditor = lazy(() => import('./pages/tools/SrtEditor'))
const UuidGenerator = lazy(() => import('./pages/tools/UuidGenerator'))
const WordProcessor = lazy(() => import('./pages/tools/WordProcessor'))
const EpochConverter = lazy(() => import('./pages/tools/EpochConverter'))
const BaseConverter = lazy(() => import('./pages/tools/BaseConverter'))
const BadgeGenerator = lazy(() => import('./pages/tools/BadgeGenerator'))
const AudioTrimmer = lazy(() => import('./pages/tools/AudioTrimmer'))
const BarcodeGenerator = lazy(() => import('./pages/tools/BarcodeGenerator'))
const PdfSign = lazy(() => import('./pages/tools/PdfSign'))
const VideoToGif = lazy(() => import('./pages/tools/VideoToGif'))
const Traincells = lazy(() => import('./pages/tools/Traincells'))

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
          <Route path="/losenordsgenerator" element={<PasswordGenerator />} />
          <Route path="/textverktyg" element={<TextTools />} />
          <Route path="/json-formaterare" element={<JsonFormatter />} />
          <Route path="/base64-kodare" element={<Base64Encoder />} />
          <Route path="/hash-generator" element={<HashGenerator />} />
          <Route path="/regex-testare" element={<RegexTester />} />
          <Route path="/qr-kod" element={<QrCodeTool />} />
          <Route path="/tangentbordstest" element={<KeyboardTester />} />
          <Route path="/enhetsomvandlare" element={<UnitConverter />} />
          <Route path="/fargpalett" element={<ColorPalette />} />
          <Route path="/markdown-forhandsgranskning" element={<MarkdownPreview />} />
          <Route path="/bildkomprimering" element={<ImageCompressor />} />
          <Route path="/tidszoner" element={<TimeZones />} />
          <Route path="/filanalys" element={<FileAnalyzer />} />
          <Route path="/ip-info" element={<IpInfo />} />
          <Route path="/text-till-tal" element={<TextToSpeech />} />
          <Route path="/motestranskribering" element={<MeetingTranscriber />} />
          <Route path="/png-till-svg" element={<PngToSvg />} />
          <Route path="/linjal" element={<RulerTool />} />
          <Route path="/oversattare" element={<Translator />} />
          <Route path="/bandbreddstest" element={<BandwidthTest />} />
          <Route path="/mediakonverterare" element={<MediaConverter />} />
          <Route path="/brodyrkortsvisare" element={<EmbroideryViewer />} />
          <Route path="/miniraknare" element={<Calculator />} />
          <Route path="/procent-raknare" element={<PercentCalc />} />
          <Route path="/slumptalsgenerator" element={<RandomNumber />} />
          <Route path="/stoppur" element={<Stopwatch />} />
          <Route path="/nedrakningstimer" element={<CountdownTimer />} />
          <Route path="/pomodoro-timer" element={<PomodoroTimer />} />
          <Route path="/slumpmassigt-val" element={<RandomPicker />} />
          <Route path="/lorem-ipsum" element={<LoremIpsum />} />
          <Route path="/metronom" element={<Metronome />} />
          <Route path="/useragent-info" element={<UserAgentInfo />} />
          <Route path="/jwt-dekodare" element={<JwtDecoder />} />
          <Route path="/cron-tolkare" element={<CronParser />} />
          <Route path="/csv-json" element={<CsvJson />} />
          <Route path="/diff-jamforare" element={<DiffCompare />} />
          <Route path="/vit-brus" element={<WhiteNoise />} />
          <Route path="/tonhojdsmatare" element={<PitchDetector />} />
          <Route path="/kodminifierare" element={<CodeMinifier />} />
          <Route path="/css-gradient" element={<CssGradient />} />
          <Route path="/ascii-konst" element={<AsciiArt />} />
          <Route path="/dns-uppslagning" element={<DnsLookup />} />
          <Route path="/ssl-kontroll" element={<SslCheck />} />
          <Route path="/http-headers" element={<HttpHeaders />} />
          <Route path="/favicon-generator" element={<FaviconGenerator />} />
          <Route path="/bildbeskärare" element={<ImageCropper />} />
          <Route path="/bildkollage" element={<ImageCollage />} />
          <Route path="/pixelraknare" element={<PixelCounter />} />
          <Route path="/skarfilsgenerator" element={<CutFileGenerator />} />
          <Route path="/pdf-verktyg" element={<PdfTools />} />
          <Route path="/ocr" element={<OcrTool />} />
          <Route path="/bakgrundsborttagare" element={<BackgroundRemover />} />
          <Route path="/heic-till-jpg" element={<HeicConverter />} />
          <Route path="/metadata-tvatt" element={<MetadataCleaner />} />
          <Route path="/passfoto" element={<PassportPhoto />} />
          <Route path="/etikett-ark" element={<StickerSheet />} />
          <Route path="/batch-qr" element={<BatchQr />} />
          <Route path="/svg-optimering" element={<SvgOptimizer />} />
          <Route path="/srt-redigerare" element={<SrtEditor />} />
          <Route path="/uuid-generator" element={<UuidGenerator />} />
          <Route path="/epoch-omvandlare" element={<EpochConverter />} />
          <Route path="/bas-omvandlare" element={<BaseConverter />} />
          <Route path="/namnbricka" element={<BadgeGenerator />} />
          <Route path="/ljudklipp" element={<AudioTrimmer />} />
          <Route path="/streckkod" element={<BarcodeGenerator />} />
          <Route path="/pdf-signering" element={<PdfSign />} />
          <Route path="/video-till-gif" element={<VideoToGif />} />
          <Route path="/traincells" element={<Traincells />} />
          <Route path="/ordbehandlare" element={<WordProcessor />} />
          <Route path="/:slug" element={<Placeholder />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
