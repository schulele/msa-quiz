// MSA Quiz – Service Worker
// Version: erhöhen wenn Inhalte aktualisiert werden!
const CACHE_VERSION = 'msa-v4';
const CACHE_NAME = `${CACHE_VERSION}-cache`;

// Alle Dateien die offline verfügbar sein sollen
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  // Google Fonts (werden bei Erstaufruf gecacht)
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap'
];

// Installation – Dateien vorcachen
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Vorcaching...');
        // Fonts separat (können fehlschlagen)
        return cache.addAll(['/index.html', '/manifest.json', '/icon-192.png'])
          .then(() => {
            return cache.add('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap')
              .catch(() => console.log('[SW] Fonts konnten nicht gecacht werden'));
          });
      })
      .then(() => self.skipWaiting())
  );
});

// Aktivierung – alten Cache löschen
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Alter Cache gelöscht:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch – Cache First für eigene Dateien, Network First für externe
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Eigene Dateien: Cache First
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => {
          if (cached) return cached;
          return fetch(event.request)
            .then(response => {
              if (response && response.status === 200) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
              }
              return response;
            })
            .catch(() => {
              // Offline-Fallback
              if (event.request.mode === 'navigate') {
                return caches.match('/index.html');
              }
            });
        })
    );
    return;
  }
  
  // Externe Ressourcen (Fonts etc.): Cache First
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetch(event.request)
          .then(response => {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            return response;
          })
          .catch(() => new Response('', {status: 503}))
        )
    );
  }
});

// Update-Nachricht an die App senden
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
