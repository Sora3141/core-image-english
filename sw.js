/* ============================================================
   Service Worker
   目的は2つ。
   1. Chrome にインストール可能なアプリとして認識させる
   2. 電車の中など、電波のないところでも学習を続けられるようにする

   方式は stale-while-revalidate。
   まずキャッシュから即座に返し、裏で取り直してキャッシュを更新する。
   だから表示は常に速く、更新は次回の起動で反映される。

   ※ 内容を更新したら CACHE の日付部分を上げること
   ============================================================ */
const CACHE = 'core-image-english-2026-09-23';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './diagrams.js',
  './data/particles.js',
  './data/verbs.js',
  './data/grammar.js',
  './data/words.js',
  './data/phrasals.js',
  './data/vocab.js',
  './data/exercises.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    /* HTTPキャッシュを迂回して確実に最新を取りに行く */
    await cache.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  if(new URL(req.url).origin !== self.location.origin) return;

  e.respondWith((async () => {
    const cache  = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true });

    const network = fetch(req).then(res => {
      if(res && res.ok) cache.put(req, res.clone());
      return res;
    }).catch(() => null);

    /* キャッシュがあれば即返し、裏で更新する */
    if(cached) return cached;

    const res = await network;
    if(res) return res;

    /* オフラインで未キャッシュのページを開いた場合の保険 */
    return (await cache.match('./index.html')) ||
           new Response('オフラインです', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
