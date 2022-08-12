'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"index.html": "ec7439cd4290380981958b32b49de037",
"/": "ec7439cd4290380981958b32b49de037",
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/NOTICES": "59658e932579cd532f14fa1225a48ad8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/images/LeetCode_logo_black.png": "ca674b5186b28e2b0edae538ee5388d0",
"assets/images/techgig.jpg": "48d437acd844c5d5868c303b9cea9ec8",
"assets/images/codechef.png": "d8086b399ea563216867ce70e422ecd4",
"assets/images/GitHub-logo.png": "f0fca642b1b10c65c5388d54264df46a",
"assets/images/ps_logo.png": "ca39a73ef696d7c52eb098dfeb998e3e",
"assets/images/codingninja.png": "2f0ab08221bb64bc73fe0929b4c92846",
"assets/images/selfImage4.jpg": "746cf10c2867e6bdf0d0f32751d5290b",
"assets/images/heyhelp/hp2.jpg": "6c2bb66b5e9a1ab8bff205cbb528b195",
"assets/images/heyhelp/hp1.jpg": "642c51a002a41f470d8f4b95d2c9d0c8",
"assets/images/heyhelp/signIn.jpg": "eb97f1d3207050098b430604b920da13",
"assets/images/self.jpg": "e05753d8eebe81a44331318da5f216da",
"assets/images/medrec/3.png": "3a5962e8e12b48b1dbc0b3fda918b6a1",
"assets/images/medrec/8.png": "5836d1777d8869100bb2514bf23aabc9",
"assets/images/medrec/4.png": "949796c59a704f0a82993e7943661aff",
"assets/images/lnmiit.png": "3f99bc9b8e93fd29d1fa93fa7413ff29",
"assets/images/cores/17.png": "3d16ac80853bb697e889f2cbe508313c",
"assets/images/cores/2.png": "248ae9210ccb82093e5091392f3243fb",
"assets/images/cores/7.png": "8b06a3b4c83e73266f1d59dae3f18f3e",
"assets/images/tally.png": "f54a880c0cbcb22c7eb1cae80b1a150a",
"assets/images/codingninja.jpg": "4789d3f9871bb15964c8506fe2971884",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/AssetManifest.json": "aa480696dba4827673f95474f68bee42",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "e905712b3d9a1f580ec3ad6cc8b0d3aa",
"CNAME": "2e4904c12966862e12f191ef377122de",
"main.dart.js": "145fb6a3db7ae3f09bdb59772ca239c0",
"manifest.json": "e0bd74b6b7d8fd342f44c7eda27b93f9",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/config": "242febeb7a389a4084f1b04bb2960a58",
".git/COMMIT_EDITMSG": "2cac21c06005fd9c9e432631aac0d3fb",
".git/refs/remotes/origin/master": "07bd020b65b70e63d493aaa684fba50d",
".git/refs/remotes/origin/main": "f11377986dbd2d4fb356a8dce51004ae",
".git/refs/heads/master": "07bd020b65b70e63d493aaa684fba50d",
".git/logs/refs/remotes/origin/master": "7a281098e4fdf3b87584746d2abc94bb",
".git/logs/refs/remotes/origin/main": "5308f260224c18fcea2ec76ea2b7ccb9",
".git/logs/refs/heads/master": "20d9722920ae9aa10404b9d2892e0bc6",
".git/logs/HEAD": "20d9722920ae9aa10404b9d2892e0bc6",
".git/index": "ac7eef3ffd3562f485f431e04da3b760",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/69/28b8a5fbbe8c8a1b6ac1bad480b2bd1fd069c7": "474757e29cc5cf25ff4f7109af4a12fd",
".git/objects/65/430757b9914468015d76e8513ba4ad70c00a5b": "e8a7d0390924d076feb0010c7f54e944",
".git/objects/65/5233782b40c288e224b02b9c4816a96f535765": "43411d3034c7ab5d6d3e2d532a3bc63a",
".git/objects/12/a43fdc4411532911f388fff8c983b5e358cbe4": "1ab2114f88343719cc96ff5cac80779d",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/72/7be2f8957ace43efc24b2d815524e06f931f1d": "e1f3cb35cb43dd0831e18c8d09355483",
".git/objects/e1/90d46a58e89947db0e1008a5e620835f71e152": "99d483fef414590dc4c952a35e6d1fe2",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/76/ceecac5fd03dbe7c0ac2a98173a0c0e905adb1": "0de206842b81a03eb7d961bf8ec0acc0",
".git/objects/49/259ac02dd2208085a536cb57a29dbc35c02d5c": "b93f49d54ace5d3aaeb023fb218f1a22",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/40/368dc3eaff33971ffe0295262bf49f7bb9d340": "776c24ab90b6b00b139dc4e83422e372",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6b/982034c41e5b28c27c8be2ebb053df9e3b6ff7": "b07f5cde0b162139c026f9936a7bc690",
".git/objects/6b/f2cf6147bcf8f952d4f30a67914eafc733ebc2": "6ad339ed0806037da8be22fe227712e5",
".git/objects/be/a48975b3f5b5cb432b2a56ef03b24b2db100c1": "d6e2319ed76d0c2ddc03f15cce7927a8",
".git/objects/fa/54b114f95ee9b28e0b08e3c0a1fc137cb8459f": "1831a54373de2680e0c30d646b8d5591",
".git/objects/45/341a94f25948c76d409c93646cb2a0a5eb5940": "a42015b34631681413d505f21d86ea00",
".git/objects/45/f56ade121d1bf4edd5bb0ea00da02443f39c23": "453d5e4f46ee134c7084134bbcd1e699",
".git/objects/d6/00ae3fdc732ae6a38738f2586200e558fd29a5": "43b6f1132c6036d8a0a869284e5a9a46",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/e2/3df9be7d5c1bee9e52ee69b777476ef5c92a1c": "369148912e579aec11378ba793cc20b1",
".git/objects/e2/956ef688472f9c9a98ec00a02d93e844869d97": "81b1a64d1e257f143c9737227d7e42f7",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/5f/f528229595482f81f820782fb463598415a476": "26760a5983cf394ea5d0c52213427663",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/973e3378cc1b06f9184c62ba31468d24bd6f3a": "38febcbfbd9a65f86529129a9d41d34b",
".git/objects/28/0a07bc014cdd41c439f632da63c52478ba7ef2": "2fda024b969ca4447fe95950e1fddd05",
".git/objects/c6/851cc81b332467180accc1e7809e028b00812a": "a1af57da2d98d3df7a29226f0b651d4b",
".git/objects/ee/4c2319414ab408a90cf1f13b468654352dd28f": "402bf8c1c8b48457128b18fbafc5df6b",
".git/objects/33/7747096e2275ceed894cd0c40a67bbbce4d898": "77632909bb2afd68f679a832bc6ac6a3",
".git/objects/19/32fcfedb82228c73ac1a0fc557488489fb38d2": "e083b00b11b422529676ea3d5acdd66b",
".git/objects/19/0eea3318e57cfa72b873a17289b4d3966ccc9c": "91ae2974dda176b74d3185fa4e51f015",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/dc/5823fadc01fb51841e054f375e809048e3d9be": "c4abd78ba7459d641fd6dc8778dd6379",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/d3d2916eba7a5d97f300dbed99ff4cdc25f1c2": "3620d920d20ff1f09df15d9aacf48fee",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/a3/dab5d96ef81b974cef1736aebf6698253997dc": "2f47318a5ea2b3cc5ccf121a1aa7e927",
".git/objects/78/4cd8001a03776275d2b2f8e3b01e76ed65850b": "513bf3c2cb6365051ac8386fd3fc568e",
".git/objects/50/7de59d93ff7fb7c975fabc6820a13d8eb81dc8": "9ca1da91d6b9930f4e9031cb2470f201",
".git/objects/50/90a31d497e2eb8e0a35b3080f4d7dff75213f2": "76938ab519d34d88124a4dc51723b0e8",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/14/b4d64c61534f0716322dd25a408953d127ffc0": "762e70fc1cdbb011ca23b9578f578550",
".git/objects/35/4ea928c5a1c02e1335e59ae8531b716b88af7c": "ea8f80356d11435b90a9652ef6ed0ff0",
".git/objects/97/0db478f3017005b5c38917aceb38b190b93047": "5d0336a9354c27b4a4394c1718159bed",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/af/52dd68e0013055fa7f2cc198680ee1484dc15e": "34e9e338a7eb98158cc0decc8267907a",
".git/objects/a9/c5d153a2d99de7a7066ac214f94e16b62aba87": "dfed92960615ffdda35464e83fed6510",
".git/objects/a9/97722aa01b32dbb3eacd14fe6bd3ff48cf8106": "c3785b8ea1673d3e13d4e2d5bff44138",
".git/objects/a9/a09db2cde64ef613e3646ac861d4e90830a02e": "18bce04adf6e3833299b5019d694f5c1",
".git/objects/2e/a0ef510bba47ae9557b0e19c3378de8db877e9": "2225defcd687de5bd9962679fa082f42",
".git/objects/87/bf04b9f9a83bb1d7dadd5deecd845168d1431f": "f16532b09923462c7d7ca1b9bf626933",
".git/objects/62/2a31c2af892750ea03ac730a706f8f4176f8f0": "7850c54cc87f66f7929af067a3f21f7b",
".git/objects/62/a43f53341fe796b6a08775a946e2a97de11d7d": "f626dc043bb89bf5f82ef57468cef96e",
".git/objects/20/f35febe6cda0b53a08af57fbc71a06879862db": "a1577904dda438b593b01dd75ae310a9",
".git/objects/59/808ba1a614450413ea07f35b8d3690241ba27a": "14155724831dace23953ab454f77d764",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/ea/d5a8c5e0de6a0e1b1f2fb72db4ff3e30795e2d": "0a8e0176ff3dae7c2f3969f12121baed",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/4f/d338e68cf0eea74db736aa88617bcfbc9cee99": "a862085a1e5f538da1f71e34d934d1da",
".git/objects/07/6f09048cb0f49639413483c22e9722029b6f38": "0973006a7df817d026c7bfe720e59dcd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/30d194f578d523ec0a38d694ce944140059d69": "ee81f50e89147d210825932386e180e8",
".git/objects/8e/31adfba7e0b2cc19eb6b18ff9e53a17b6cbfe2": "b405edae47bc47d08836f764152d4096",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/43/d9a1d5fc33831218d4581a1b209c646c84d3d9": "dd94af30c8455c7024e70a79b1e28a43",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/57/bc3fe290d5d37f84317cbef7534a02a3e1df83": "09c8b46a8653894f08c748af697944a4",
".git/objects/57/bd834de113c5b4b2e87305ccdc145820e8d321": "8a22b6a4eafed11ebc695d6ba4444e47",
".git/objects/d2/e0104795b034ed3a4da0497f414a499a563c5a": "6e2c62d20c56048dd3724ea7a3e0d379",
".git/objects/d2/cefe40f33b34dd1a4c5c55e69bacb6d22ea43a": "f2ee0d702c13cb0d2cca708cd72ed9da",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1864c76a8325b383c9c840a10a4549536a2282": "2205f8e8fd7b13d302029f38696a8983",
".git/objects/df/03652c99517339d1aeb256bf19a82909468f8b": "67169933dcf0b32eb4f8aefa53de2570",
".git/objects/b5/64bccd37339c07e424dac6c13c949aaef2bee1": "3a29ea734d3a5eeb68bd69db14baefd1",
".git/objects/9d/1bdebbd9e107e7f61dfedb3cbc9e4f7063ceb6": "1c64310c08977830843e3ef7639b41ca",
".git/objects/2a/1be3f1fe735bb68f201515b73deab3cc5bb4b3": "472081a5c59f4107022c314d9c310434",
".git/objects/2a/54bb2dd93a6b9440f15bd7bf95c63e41a857dd": "18dafb1a8d65b2a46153f5874e942d74",
".git/objects/3a/3552714f797c1e0983b8d33a1d2587c39087d3": "fd030c8241ba4956cb75ae15e27c7a22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/FETCH_HEAD": "834a1173ded93f7414ee7099029ee9a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
