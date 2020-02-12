console.log('hello world')


caches.delete('cachesName').then(boolean => {
  console.log('caches delete', boolean)
})

// window.addEventListener('activate', event => {
//   console.log('event', event)
// })


caches.has('cachesName').then(boolean => {
  console.log('caches has', boolean)
})

caches.keys().then(keylist => {
  console.log('caches keys', keylist)
})

// caches.match('', '').then(response => {
//   console.log('caches match', response)
// })


caches.open('v1').then(cache => {
  console.log('caches open', cache)
})
caches.open('cachesName').then(cache => {
  console.log('caches open', cache)
})