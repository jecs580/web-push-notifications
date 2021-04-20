
const PUBLIC_VAPID_KEY = 'BDbsXufIH3eaXp8IE0wcgC28dksesLVvSLu9njWJZqRt0oNdwSh45zO7uKz4YqH3RSZyWeNVLhkXuq4cQXCaT9Y'

const subscription = async()=>{
    // Service worker
    const register = await navigator.serviceWorker.register('/service-worker.js',{
        scope:'/'
    });
    console.log('Nuevo service-worker');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:PUBLIC_VAPID_KEY
    });
    await fetch('/subscription',{
        method:'POST',
        body:JSON.stringify(subscription),
        headers:{
            "Content-Type":"application/json"
        }
    });
    console.log('Suscrito');
}
const form = document.querySelector('#myform');
const message = document.querySelector('#message');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch('/new-message',{
        method:'POST',
        body:JSON.stringify({
            message:message.value
        }),
        headers:{
            'Content-Type':'application/json'
        }
    });
    form.reset();
})
subscription();