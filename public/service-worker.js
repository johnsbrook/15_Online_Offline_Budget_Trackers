// Declare an array of FILES_TO_CACHE inside an array of strings
const FILES_TO_CACHE = ["/", "db.js", "/index.html", "index.js", "styles.css"];

// Declare CACHE_NAME as static-cache-v2
const CACHE_NAME = "static-cache-v2";

// Declare DATA_CACHE_NAME as data-cache-v1
const DATA_CACHE_NAME = "data-cache-v1";

// Create self addEventListener() to install with a function to wait until files have been pre-cached by opening CACHE_NAME as an argument and adding all FILES_TO_CACHE as a return
self.addEventListener("install", function(event) {
    
    // Event to pre-cache files
    event.waitUntil(
        caches.open(CACHE_NAME) // If code doesn't work, join ".then..." line here
        .then(cache => {
            console.log(`Files pre-cached successfully.`);
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    // Added self.skipWaiting()
    self.skipWaiting();
})


// Create self addEventListener() to activate with a function and map keys
self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log("Previous cache data removed", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    
    // Added self.clientes.claim()
    self.clients.claim();
});

// Create self addEventListener() to fetch api to clone and store response in cache
self.addEventListener("fetch", function(event) {
    if (event.request.url.includes("/api/")) {
      event.respondWith((
        caches.open(DATA_CACHE_NAME).then(cache => {
          return fetch(event.request)
            .then(response => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(event.request.url, response.clone());
              }
  
              return response;
            })
            .catch(err => {
              // Network request failed, try to get it from the cache.
              return cache.match(event.request);
            });
        }).catch(err => console.log(err))
      ));
  
      return;
  }});

