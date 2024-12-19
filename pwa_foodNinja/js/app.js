
//navigator representa o browser
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker register',reg))
        .catch((err) => console.log('Service worker not register',err))

}