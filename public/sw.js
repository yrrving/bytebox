// Bytebox service worker – enkel offline-cache (runtime caching).
// Bumpa versionen när cache-strategin ändras.
const CACHE = 'bytebox-v1'
const BASE = '/bytebox/'
const SHELL = [BASE, BASE + 'index.html', BASE + 'manifest.webmanifest', BASE + 'favicon.svg']

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).catch(() => {}))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return

  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return

  // Sidnavigeringar: nätverk först, fall tillbaka till cachad app-shell offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(req, copy))
          return res
        })
        .catch(() => caches.match(req).then((r) => r || caches.match(BASE + 'index.html'))),
    )
    return
  }

  // Övriga GET (assets, TrainCells m.m.): cache först, annars nätverk (och cacha).
  event.respondWith(
    caches.match(req).then(
      (cached) =>
        cached ||
        fetch(req).then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(req, copy))
          return res
        }),
    ),
  )
})
