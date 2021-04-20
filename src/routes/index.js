const { Router } = require('express');

const webpush = require('../webpush');
const router = Router();
let pushSubscription;
router.post('/subscription', async (req, res) => {
    pushSubscription = req.body;
    res.status(200).json({ ok: true })
});
router.post('/new-message', async (req, res) => {
    const { message } = req.body;
    const payload = JSON.stringify({
        title: 'Jecs Notification',
        message:message
    })
    try {
        await webpush.sendNotification(pushSubscription, payload);
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;