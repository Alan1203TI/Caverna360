const CACHE = 'sesiverso-caverna-360-v3';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/scenes/scene1_entrada.png',
  './assets/scenes/scene2_maos.png',
  './assets/scenes/scene3_caca.png',
  './assets/scenes/scene4_simbolos.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
    const clone = resp.clone();
    caches.open(CACHE).then(cache => cache.put(e.request, clone));
    return resp;
  }).catch(() => caches.match('./index.html'))));
});
