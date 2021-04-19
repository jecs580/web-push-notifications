const {Router} = require('express');

const webpush = require('../webpush');
const router = Router();
let pushSubscription;
router.post( '/subscription',async (req,res)=>{
    pushSubscription = req.body;
    res.status(200).json({ok:true})
    const payload =  JSON.stringify({
        title:'Mi notificacion personalizada',
        message:'Hola mundo'
    })
    try {
        await webpush.sendNotification(pushSubscription,payload);
    } catch (error) {
        console.log(error);
    }
});



module.exports= router;