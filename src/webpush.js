const webPush = require('web-push');
webPush.setVapidDetails('mailto:sanchezenrique580@gmail.com',process.env.PUBLIC_VAPID_KEY,process.env.PRIVATE_VAPID_KEY);

module.exports = webPush;