const staticCacheName = 'rest-reviews-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'data/restaurants.json',
        'css/styles.css',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url)
	if (requestUrl.origin === location.origin) {
		if (requestUrl.pathname === '/restaurant.html') {
			event.respondWith(caches.match('/restaurant.html'))
			return
		}
	}
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
