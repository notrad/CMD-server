const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const mongoose = require('mongoose');
const verifyToken = require('../middleware/verifyToken');

mongoose.connect(process.env.DB_URI, (error) => {
    if (error) {
        console.error('Database: ',error);
    } else {
        console.log('DB connection successful');
        console.log(process.env.DB_URI);
    }
});

router.get('/', (req, res) => {
    res.status(200).send('Server/API Ack.');
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser)=>{
        if (error) {
            console.error(error);
        } else {
            res.status(200).send(registeredUser);
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.error(error);
        } else {
            if (!user) {
                res.status(401).json({statusCode: 401, errorMessage: 'Invalid Email!'});
            } else if(user.password !== userData.password){
                res.status(401).json({statusCode: 401, errorMessage: 'Invalid Password!'});
            } else {
                let payload =  { _id: user._id, email: user.email, name: user.name, profileImageUrl: user.profileImageUrl,role: user.role };
                let token = jwt.sign(payload, process.env.SECRET_KEY);
                res.status(200).json(token);
            }
        }
    });
});

module.exports = router;