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
            res.status(401).send({ message: err.message });
        }
    })

    .post('/createEvent', async (req, res) => {
        try {
            const { startTime, endTime, street, city, state, zipcode, timeToLeave, userID } = req.body;
            await Event.createEvent(startTime, endTime, street, city, state, zipcode, timeToLeave, userID);
            res.send({ message: 'Event created' });
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .delete('/deleteEvent', async (req, res) => {
        try {
            const { eventID } = req.body;
            await Event.deleteEvent(eventID);
            res.send({ message: 'Event deleted' });
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .put('/editEvent', async (req, res) => {
        try {
            const { startTime, endTime, eventID } = req.body;
            await Event.editEvent(startTime, endTime, eventID);
            res.send({ message: 'Event edited' });
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .get('/getEventByID', async (req, res) => {
        try {
            const { eventID } = req.body;
            const event = await Event.getEventByID(eventID);
            res.send(event);
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })
    
module.exports = router;