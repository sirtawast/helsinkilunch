var CACHE_NAME = "pitskulounas-cache";
var urlsToCache = [
  "/",
  "/css/main.css",
  "/js/main.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
          console.log(response)
            return response || fetch(event.request);
        })
    );
});