"use strict";var precacheConfig=[["/index.html","81a7e5226185bda2d98c538c19f21a3d"],["/static/css/main.bde04452.css","55beb153fd9de73a5c0d12f41c7b4e33"],["/static/js/main.48f6cdc1.js","44df50fb6971fdea53d92a9988401775"],["/static/media/Amelia.8de40b74.ttf","8de40b744e00288f579931f3f59b5666"],["/static/media/Aubrey.dc6fe100.ttf","dc6fe1002b5fe08556f367a469659cba"],["/static/media/Blakely.291a4a51.ttf","291a4a5147562a095303bdedee65e671"],["/static/media/Bodhi.8cc060bb.ttf","8cc060bb2e9501bb279b5ea52da8ff83"],["/static/media/Bodoni72.61127e58.ttc","61127e5883f15fea93ea8df23b0e19ee"],["/static/media/Bodoni_bold.9a624673.ttf","9a62467316119f15f7cf6fe7ebdbbe3c"],["/static/media/Brooke.73ac6bd7.ttf","73ac6bd74dd31c41e0c2576e0cfd66c2"],["/static/media/Brooklyn.fa7c9c77.otf","fa7c9c77620e0d4c5144b64aa38c7054"],["/static/media/Cailey.7d7bbb25.otf","7d7bbb2524782f4e9ee885841ffb797f"],["/static/media/Cameron.0b13ca85.ttc","0b13ca8537fc4aee79d8b68095a92144"],["/static/media/Charlie.98714201.ttf","9871420118879979d4b2a8107ce7c680"],["/static/media/Charlotte.d1e74599.otf","d1e7459984b795346649092483380c71"],["/static/media/Chloe.dd668daa.ttf","dd668daa0ec114caf624231b5001c5c2"],["/static/media/Emma.1b490b05.ttf","1b490b05424fd3fe1c5c335866fb0187"],["/static/media/Grayson.cc2b24a5.ttf","cc2b24a51f1347a3de42a1c83ba432d1"],["/static/media/Hadley.f9934e1e.ttf","f9934e1e3817fe483459355a2c14f355"],["/static/media/Hannah.84e8f3d2.ttf","84e8f3d22b9b90841c2b31f25b07838d"],["/static/media/Jack.142a91bd.ttf","142a91bd5fb9bcad904b7e9b125538b1"],["/static/media/Katie.b8210279.ttf","b8210279c266558fc72ac86025aceda0"],["/static/media/Kendall.066189d1.ttf","066189d136bec00a6aa393e31f2a731e"],["/static/media/Kyle.6ef76dbc.otf","6ef76dbc0b7218bba795b6f6474e4640"],["/static/media/Landon.08524451.ttf","0852445144927a1d6bac5746c822dd2e"],["/static/media/Layla.7f8a0628.ttf","7f8a06281310152390c6a1ed3b7a5e70"],["/static/media/Liam.2345c46f.otf","2345c46f8a94afdafbcecd96765accee"],["/static/media/Lincoln.f97f78e7.ttf","f97f78e7037b2696c473ef32c0142c05"],["/static/media/Mackenzie.13ae303a.ttf","13ae303abe05b6cd14633154fc9d425e"],["/static/media/Main_Logo.af1dd2ab.png","af1dd2abd4dfdd7cc8f336c2a57aae24"],["/static/media/Mickey.ab260a56.otf","ab260a56f2b852b78f81eac337e0a2fc"],["/static/media/Noah.cef63d63.otf","cef63d6377dfe52a8d779a3dd4c45fb6"],["/static/media/Olivia.393fefaf.otf","393fefaf45c358dff3721ceca9f1c82d"],["/static/media/Riley.6b27652b.otf","6b27652b003e9b5cd3bf37ffa1931b81"],["/static/media/Samantha.f53eeb42.ttf","f53eeb42e84a6ade9b87e6d60a9e0c24"],["/static/media/Zoe.1e37c5f3.otf","1e37c5f329b3e4c1e4c10b9b4043b42b"],["/static/media/chris.343cd54d.ttf","343cd54d6005bac7e94f98e4738ee2d6"],["/static/media/dakota.f86cc7fd.otf","f86cc7fd976175713a8fa7215fc842f5"],["/static/media/skywalker.cc3019aa.ttf","cc3019aa6439ef893839b8a0d6d0391d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});