importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' ||
                    request.destination === 'style' ||
                  request.destination === 'image' ||
                  request.destination === 'document' ||
                  request.destination === 'font' ||
                  request.destination === 'manifest',
    new workbox.strategies.CacheFirst()
);


