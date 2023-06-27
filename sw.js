const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
  '/',
  '/index.html',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/site.webmanifest',
  '/assets/js/worker.js',
  '/assets/js/ranking.js',
  '/assets/js/darkMode.js',
  '/assets/js/loading.js',
  '/assets/js/svg-loader.min.js',
  '/assets/styles.css',
  '/assets/img/banana.svg',
  '/assets/img/background.svg',
  '/assets/img/buttonIcons.svg',
  '/assets/img/mario.svg',
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  'https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2',
];
const dontCache = ['db.json', 'pixel.png'];

function canCache(url) {
  return dontCache.every((fileName) => !url.includes(fileName));
}

async function handleFetch(e) {
  const cacheRes = await caches.match(e.request);
  if (cacheRes) return cacheRes;

  try {
    const fetchRes = await fetch(e.request);
    if (canCache(e.request.url)) {
      const cache = await caches.open(dynamicCacheName);
      cache.put(e.request.url, fetchRes.clone());
    }
    return fetchRes;
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Network error', status: 503 }), {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    }),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key)),
      );
    }),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(handleFetch(e));
});
