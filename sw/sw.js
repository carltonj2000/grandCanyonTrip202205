import { CACHE_NAME } from "./sw-cache-name";

const urlsToCache = [
  "index.html",
  "gc-32.png",
  "offline.html",
  "assets/index.js",
  "assets/index.css",
].map((a) => "/grand-canyon-2022-may/" + a);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return (
        resp ||
        fetch(event.request)
          .then((response) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          })
          .catch((e) => {
            return caches.open(CACHE_NAME).then((cache) => {
              return cache.match("index.html");
            });
          })
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  var cacheKeeplist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

addEventListener("message", (messageEvent) => {
  if (messageEvent.data === "skipWaiting") return skipWaiting();
});
