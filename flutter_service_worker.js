'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b81bdec6b7ab6162d6af9ff37f987f25",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d5d83381e2ed0af4d15131767bbf50b",
".git/logs/refs/heads/main": "f13f71bf50166ee1d77eb189bffb409f",
".git/logs/refs/remotes/origin/main": "feb426860407696fcaad8654f8261bc7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/c0627e7788d8a85c70c5d9861e8cc0adec2e1d": "7289b707ed8bb682f0de9e9e2f2479dc",
".git/objects/08/ca4cab18c2aa215dec1845a3e5767a6341bf4e": "a2073f868f89320c31a0969c6ddf72bf",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/13/c0863f2e04ede4ec405761ef2bdd1cfb85b816": "d796e55a871a7c87abcc247055203701",
".git/objects/15/d0a04b3d0e56efd4bbd45088cb45cf506aec88": "8cc3f391ae960c059518309143fc9527",
".git/objects/17/ca5457e1f2b5158ab2f16fde5c830c666021b0": "865849999fdcaf202c1ec9ade487e810",
".git/objects/18/7a3b1a7213bcc951edc1caab305920ffc9fd1b": "7e4f87b096e5058a9f1919b065104e10",
".git/objects/1a/6c369b28aa8cec64ef89601a8a8d7ac5c2cc62": "4af8cb1d203761f8623629e318fcf3dc",
".git/objects/1e/55b6194e09d3fc822aecc16d415798ce12ea90": "7188876bff65de920246d2880828fbc4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7b5172690e826cb4ec44ed8aeff740a841ed40": "152ef86b47899d7dae849efa1936c830",
".git/objects/24/ce4b0d798f1499350389db1b2b733c7098e6b7": "66f2e18e85b882f5df7abef954088fd5",
".git/objects/2a/6658b52918d72ae35b8cea2ed663b0b47c9895": "78f465827a7b0140a1d5420aaefc532e",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/7e6205e056a76c5652b99e0135d5e07289a6d0": "25de7af3448c88fc88f9c970121539e1",
".git/objects/2e/bfef2e185e536414dea4d08d5ffacb80b02810": "196dabfb5a1568f317dc277080f33c4a",
".git/objects/34/f4eac09bd460e8ace5045ac232598cbf666e2a": "0c9409dff0f9e9fc540bc871133d6327",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/c8d4fc767d21cf0ca1b428577e3d99517bb11d": "f588e1062eb93d1a6131144ee6070803",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/40/d2ded40d7c86adfdf7052a6f319d052787df99": "feb538be7f7382ae4df0916dc9887486",
".git/objects/42/ac3a281f1f64b626b2dcb9ecbbffb54007fb96": "d0ca820a56d23c155cf934db4ab00937",
".git/objects/43/46528674ee77c0f24fcacad643316e2c851ed6": "6eca3a82affbe99751b631eb0f836c6b",
".git/objects/43/a36d0281d2d5ac6a117551e0a940387fa967a3": "a3e6e899008dee3d6789db58013ce1f9",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/638218e923c5f157c0ddfb90b0e76201130b11": "984aba36db0f34003d084557face56df",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/a0f062f9e4e59359d34353562a0d897e889dcf": "b9c4b511357a290cd23809b7ae733b35",
".git/objects/47/df238ed6179218d01fc3be37905a0fe9705098": "2ca7a5a990f5b6776f2b1a3d7f869825",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4e/922674655613dcd188c37207ec37beddff3aa0": "2f91384104bc98bef0db988acc0ddcba",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/ef1cfe956d563e5da68fb9263bfca0c20dd41b": "06eff01b78eb3f54f775e7021165b358",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/eb17cf58dd406d7a5f3c4ee7864e1a97c7ed17": "9f1c0858d02a34ec93b3e3643f941162",
".git/objects/5d/c40b62ef1af6f56c020ec696ade12a24d29ff7": "abcf8b35af3476425163c487e286c6d7",
".git/objects/70/a2d8da11227e0aabe002d03d1f428f2b7f3a59": "e59cd785e7f72225c0946fa77e5eed02",
".git/objects/70/d72e49e9d57a787de62bc2cce1db5063d48e82": "99467ef0de04bbf9b3215dcbefc2ef2f",
".git/objects/71/86bd2ae122e31123dce3d54750165e8ca841f5": "8424b25cf6670af98db994b1cb8a2475",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/76/7b62620161106229121bc00a5063278bebe805": "d4b694ae61edcd8c034148892fba3e17",
".git/objects/80/58154309afe3f855669e49be3a384eb91dcbcd": "cfb0d1bc8bd858f0bed972485e8d8797",
".git/objects/87/76796ed3f96be62a5bce8c84512fb99e7902b4": "bc7d30b31e0361995282013c05175047",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/61c88294c97b258889a178ff2c9cfea5c23678": "27cb7624a7b8642bc48bfdc98292446b",
".git/objects/8f/3d4be177860a927159b8545c403ecc73dd043f": "38a563bb9e104879aecbc46571757958",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/a0/4ce45494791965163a4208b8ec5f1eefae630b": "eca670aa73e2b63e56d0e5e8d7dfb8f4",
".git/objects/a0/520cb2e9086e24da2d75ce9d9e68adff50079f": "03560f008cc591d48956e13f0de6256a",
".git/objects/a2/2d6ea2f1c62ac186d4ce5cc03d6f32d4f81d70": "53c3952a6da03367bade159fca489551",
".git/objects/a5/eced0ab1e3f84d43539516e02e108395a2c31b": "b0af577cf4b0d8a1a628e5dbf225318a",
".git/objects/aa/87fee492d0a4a991f8b1b3a86fe0901199ee54": "20b5baabf7c345e1702d406b62de0ee0",
".git/objects/aa/d29a3068d4e2d3151cc9823223d0a186671de7": "e9f14d5d9d54470df1217833a3e474d1",
".git/objects/aa/fa65a82f7623e8ef0339be0e290701f9a86f36": "29e2851f35e38e8cb47c49bfe69abf59",
".git/objects/ab/27dae9658d7a91c0fdb9066dafa2ff64688fce": "d1daba6d4ac1354a15478eff39897bae",
".git/objects/ab/dc2c831739531af278e6403223e2f2ed1ed4ab": "2429dca36b51402afc34c37a326d6660",
".git/objects/ae/c0e982691e14346e4afac00be3f137f4a7f511": "f8b3785a0f72ffe6c5d11447404bfde8",
".git/objects/b6/0cd586fadbcef593f68783f1d7f9cbd8187868": "fc501443f7c21bb58dd7f43eb8991bd7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d68b9e06ea30f1d97df3fd3c7b47f86330b7d7": "0bc5b0aba3714fddd178c044d9f99cfd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/a3f415059a28a71dea2824d2560db21b4ac668": "c45262bd42ffbc8e3bdb6a7d10ec9cfc",
".git/objects/bf/14ebba8064874c861a86ed0214d792de86fda4": "ae4fcfe90404ea17e1e03708826ebb15",
".git/objects/c4/a379fb7b52bb59c50b63491a4cf45ea0534f82": "a85b1658dce82c14a7f42c9d4544e921",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/36ae2ae67803842f8a14425916d19448fe1bdb": "257f815c0540d7ffa86639cf34803043",
".git/objects/d1/1757cdeee700e24b5b5b2774041517c1e8f0c6": "82b9d4d7afe9c85e0ac705baa619f626",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/9c5bd7a9358cff9553800bb35be8f1111dd6e2": "bb02b75542ed9a027721e85f839ab7d4",
".git/objects/da/c4b353775a44ffe0b514595e72cdf5065ffa81": "ddf49ddd60f7a1f18d066d2b0505cdbc",
".git/objects/e3/df88de0429d6c4915e98dcd5a8a1f40cb22f72": "7be36e559457b7119f7537b41d6a3678",
".git/objects/e4/9232ac0bc3ae7653943b78807e1621539e7376": "bbd3fbff655e6a15d020a9549f94c811",
".git/objects/e5/61bc279e72458aeadd84b3a5606d8b59140950": "971f71778dd4e622127cbe8749f9219d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/c2e81f4201b11158cb5c5cd65f9d0eea9e0a9d": "ff93327f8511c366757347f5832476ed",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/512525b2c2b9fc440da9c1488046c2209307ef": "f685dd0dead44979b322afb2f4bf318c",
".git/objects/f5/ccd65ed88bcc6edeb7e7ff06e29d586369e99c": "983495274a0b06c762af04c15eb986a3",
".git/refs/heads/main": "4d0c2fa20d70368932182519e6c20e6b",
".git/refs/remotes/origin/main": "4d0c2fa20d70368932182519e6c20e6b",
"assets/AssetManifest.bin": "be2d4b486648d5c50a6b26f472b17ff9",
"assets/AssetManifest.bin.json": "64ecc7bb61082f67a04ba48533ab8956",
"assets/AssetManifest.json": "69112025861e954028c3f8a64c257c0f",
"assets/assets/images/aaa.png": "bf484043d2d74b61eabac75b5ecf67e3",
"assets/assets/images/belkis1.jpg": "3d04808b3ff325781592c7d387c38adf",
"assets/assets/images/belkis2.jpg": "02092f746195deda5ae4d1f574cd1e3b",
"assets/assets/images/belkis3.jpg": "87cd298bdc6bb05b1b6742f79700eb93",
"assets/assets/images/belkis4.jpg": "2d4f8e6493dd4094c1c7a1afce7422c2",
"assets/assets/images/online-marketplace.jpg": "dc70f7a1da94e8dceb534fbc67ab39f4",
"assets/assets/images/shopMouse.jpg": "99156a39199e08a31e906fd7201ae904",
"assets/assets/images/sllers.jpg": "6732106226a2edda130732a7aba8dcb6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4dd8a281079e1037363acdd6757ef5e5",
"assets/NOTICES": "3906d6c3b509f4352296fef5e3e2bac5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d5be8d9028e2c52d8b89873b098b36ef",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "004f52e7e788d8c2f23e99885cf1cdb7",
"/": "004f52e7e788d8c2f23e99885cf1cdb7",
"main.dart.js": "c01ae7e6c810f77867244e8040291ade",
"manifest.json": "4b3132058650981aa33c681697bae0f5",
"version.json": "e9eb58db72d407be27e9fa052224c304"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
