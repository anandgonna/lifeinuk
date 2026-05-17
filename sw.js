// A minimal service worker to satisfy Chrome's PWA installability requirements
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Simple network-first approach. 
    e.respondWith(
        fetch(e.request).catch(() => new Response('Offline mode not fully cached yet.'))
    );
});
