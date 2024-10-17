const cacheName = 'v1'

console.log("Executing service worker");

self.addEventListener('install', async function () {
  console.log('Service worker installed');
});

self.addEventListener('activate', event => {
  console.log('service worker activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  event.respondWith(networkFirst(cacheName, request));
});

async function networkFirst(key, request) {
  const cache = await caches.open(key);
  try {
    const networkResponse = await fetch(request);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (err) {
    const cachedResponse = await cache.match(request);
    return cachedResponse
  }
}