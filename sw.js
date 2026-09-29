const CACHE='sesiverso-caverna-360-v11-evidencias-highlight';
const ASSETS=[
 './','./index.html','./styles.css?v=11','./app.js?v=11','./manifest.webmanifest',
 './assets/logo-sesi.png','./assets/icons/icon-192.png','./assets/icons/icon-512.png',
 './assets/audio/caverna-ambiente.wav',
 './assets/scenes_v10/01_entrada_nova.jpg','./assets/scenes_v10/02_corredor.jpg','./assets/scenes_v10/03_maos.jpg',
 './assets/scenes_v10/04_passagem.jpg','./assets/scenes_v10/05_animais.jpg','./assets/scenes_v10/06_fogo.jpg',
 './assets/scenes_v10/07_simbolos.jpg','./assets/scenes_v10/08_neolitico.jpg','./assets/scenes_v10/09_atelie.jpg'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==location.origin)return;const isCore=/\/(index\.html|app\.js|styles\.css|sw\.js)(\?|$)/.test(u.pathname+u.search);if(isCore){e.respondWith(fetch(e.request,{cache:'no-store'}).then(resp=>{const clone=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));return resp}).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const clone=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));return resp})));});
