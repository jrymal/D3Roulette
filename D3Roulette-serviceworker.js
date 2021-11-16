"use strict";

// TODO : Someday I'll pull this together in som Framework....

const CACHE_NAME = 'randoD3';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                // TODO : update me once complete
                'index.html',
                'manifest.json',
                'D3Roulette-serviceworker.js',
                
                'css/core.css',
                'css/D3Roulette.css',
                
                'images/icons-70.png',
                'images/icons-80.png',
                'images/icons-150.png',
                'images/icons-192.png',
                'images/icons-310x150.png',
                'images/icons-512.png',
                
                'js/D3Roulette.js',
                'js/Util.js',
                'js/classes/barbarian.js',
                'js/classes/crusader.js',
                'js/classes/demon_hunter.js',
                'js/classes/monk.js',
                'js/classes/necromancer.js',
                'js/classes/witch_doctor.js',
                'js/classes/wizard.js',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    var updateCache = function(request){
        //console.debug(CACHE_NAME+': retrieving page '+request.url);
        return caches.open(CACHE_NAME).then(function (cache) {
            return fetch(request).then(function (response) {
                //console.debug(CACHE_NAME+': add page to offline'+response.url);
                return cache.put(request, response);
            });
        });
    };
  
    event.waitUntil(updateCache(event.request));
  
    event.respondWith(
        fetch(event.request)
        .catch(function(error) {
            console.log( CACHE_NAME+': Network request Failed. Serving content from cache: ' + error );
            //Check to see if you have it in the cache
            //Return response
            //If not in the cache, then return error page
            return caches.open(CACHE_NAME)
                .then(function (cache) {
                    return cache.match(event.request)
                        .then(function (matching) {
                            var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
                            return report
                        });
                });
        })
    );
});
