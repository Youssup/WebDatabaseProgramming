const express = require('express');
const Event = require('../models/event');
const router = express.Router();

router

.get('/getEvents', async (req, res) => {
    try {
        const events = await Event.getEvents();
        res.send(events);
    }
    catch (err) {
        res.status(401).send({message: err.message});
    }
})

module.exports = router;