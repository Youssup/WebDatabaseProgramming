const express = require('express');
const User = require('../models/user');
const router = express.Router();

router

    .get('/getUsers', async (req, res) => {
        try {
            const users = await User.getUsers();
            res.send(users);
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .post('/createUser', async (req, res) => {
        try {
            const user = await User.createUser(req.body.username, req.body.password);
            res.send(user);
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .delete('/deleteUser', async (req, res) => {
        try {
            const user = await User.deleteUser(req.body.userID);
            res.send(user);
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .put('/editUser', async (req, res) => {
        try {
            const user = await User.editUser(req.body.username, req.body.userID);
            res.send(user);
        }
        catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

module.exports = router;