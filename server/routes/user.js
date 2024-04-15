const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const users = User.getUsers();
        res.send(users);
    }
    catch (err) {
        res.status(500).send({message: err.message});
    }
})