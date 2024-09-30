self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
    event.waitUntil(
        caches.open('static-v1').then((cache) => {
            return cache.addAll([
                './index.html',
                './bootstrap-5.3.3-dist/css/bootstrap.min.css',
                './styles/style.css',
                './js/crud.js',
                './icon192_rounded.png',
                './icon512_rounded.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
