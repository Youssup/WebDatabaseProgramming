const { Router } = require("express");

const users = [
    {
        userID: 1,
        username: 'cathy123',
        email: '',
        password: 'password123'
    },
    {
        userID: 2,
        username: 'Carl',
        email: '',
        password: 'password123'
    },
    {
        userID: 3,
        username: 'james123',
        email: '',
        password: 'password123'
    }
]

let getUsers = () => users;

module.exports = Router