importScripts('/cache-polyfill.js');

var CACHE_NAME = 'animal-drop';
var urlsToCache = [
      '/',
      'tab1.html',
      'tab2.html',
      'cache-polyfill.js',
      '/css/firebaseui.css',
      '/img/animal/1.png',
      '/img/animal/2.png',
      '/img/animal/3.png',
      '/img/animal/4.png',
      '/img/animal/5.png',
      '/img/animal/6.png',
      '/img/animal/7.png',
      '/img/animal/8.png',
      '/img/animal/9.png',
      '/img/animal/10.png',
      '/img/animal/11.png',
      '/img/animal/12.png',
      '/img/animal/13.png',
      '/img/animal/14.png',
      '/img/animal/15.png',
      '/img/animal/16.png',
      '/img/fd.png',
      '/img/girl.png',
      '/img/icon-192.png',
      '/img/icon-512.png',
      '/img/logo.png',
      '/css/font_awesome/fonts/fa-brands-400.woff2',
      '/js/configs.js',
      '/js/firebase-app.js',
      '/js/index.js',
      '/js/onsenui.min.js',
      '/js/jquery.min.js',
      '/js/firebaseui.js',
      '/js/firebase-messaging.js',
      '/js/firebase-firestore.js',
      '/js/firebase-database.js',
      '/js/firebase-auth.js',
      '/css/dark-onsen-css-components.css',
      '/css/dark-onsen-css-components.min.css',
      '/css/index.css',
      '/css/onsen-css-components.min.css',
      '/css/animate.css',
      '/css/onsenui.css',
      '/css/onsenui-core.css'
    ];
    
    self.addEventListener('install', function(event) {
      // Perform install steps
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
    });
 

      self.addEventListener('fetch', event => {
        if (event.request.mode === 'navigate') {
          // See /web/fundamentals/getting-started/primers/async-functions
          // for an async/await primer.
          event.respondWith(async function() {
            // Optional: Normalize the incoming URL by removing query parameters.
            // Instead of https://example.com/page?key=value,
            // use https://example.com/page when reading and writing to the cache.
            // For static HTML documents, it's unlikely your query parameters will
            // affect the HTML returned. But if you do use query parameters that
            // uniquely determine your HTML, modify this code to retain them.
            const normalizedUrl = new URL(event.request.url);
            normalizedUrl.search = '';
      
            // Create promises for both the network response,
            // and a copy of the response that can be used in the cache.
            const fetchResponseP = fetch(normalizedUrl);
            const fetchResponseCloneP = fetchResponseP.then(r => r.clone());
      
            // event.waitUntil() ensures that the service worker is kept alive
            // long enough to complete the cache update.
            event.waitUntil(async function() {
              const cache = await caches.open(CACHE_NAME);
              await cache.put(normalizedUrl, await fetchResponseCloneP);
            }());
      
            // Prefer the cached response, falling back to the fetch response.
            return (await caches.match(normalizedUrl)) || fetchResponseP;
          }());
        }
      });