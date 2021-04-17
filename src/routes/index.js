const {Router} = require('express');

const webpush = require('../webpush');
const router = Router();
let pushSubscription;
router.post( '/subscription',(req,res)=>{
    pushSubscription = req.body;
    res.status(200).json({
        ok:true
    })
});



module.exports= router;