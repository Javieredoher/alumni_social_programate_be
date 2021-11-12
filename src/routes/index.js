//
const { Router } = require("express");
const router = Router();
const webpush = require("../webpush");
let pushSubscrition;

router.post("/subscription", async (req, res) => {
    // console.log(req.body);
    pushSubscrition = req.body;
    res.status(200).json(); // send to the service

    const payload = JSON.stringify({
        title: "my custom notification",
        message: "welcome to the social programate",
    });

    try {
        await webpush.sendNotification(pushSubscrition, payload); //where its send
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
