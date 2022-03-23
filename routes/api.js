const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const verifyToken = require('../middleware/verifyToken');
const AuthController = require('../controllers/authController');

mongoose.connect(process.env.DB_URI, (error) => {
    if (error) {
        console.error('Database: ', error);
    } else {
        console.log('DB connection successful');
        console.log(process.env.DB_URI);
    }
});

router.get('/', AuthController.getApiRouteRootPath);

router.get('/register', AuthController.getRegister);

router.get('/login', AuthController.getLogin);

router.post('/register', AuthController.postRegister);

router.post('/login', AuthController.postLogin);

module.exports = router;