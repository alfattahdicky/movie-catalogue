import CacheHelper from "./utils/cache-helper";
import 'regenerator-runtime';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', event => {
  console.log('installing Service Worker....');

  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
})

self.addEventListener('activate', event => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
})

self.addEventListener('fetch', event => {

  // TODO: Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
})