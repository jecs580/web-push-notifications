console.log('Service worker');

self.addEventListener('push',e=>{
    console.log('e.data -->',e.data);
    const data = e.data.json();
    console.log('data -->',data);
    self.registration.showNotification(data.title, {
        body: data.message,
        icon:'https://www.clipartmax.com/png/middle/200-2002475_red-paper-plane-png-image-paper-plane-logo.png'
    })
})