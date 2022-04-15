const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

class AuthController {
    userData = {};
    payload = {};
    user = {};

    static getApiRouteRootPath = (req, res) => {
        res.status(200).send('Server/API Ack.');
    }

    static getLogin = (req, res) => {
        res.status(200).json({message:'GET/ login not implemented'});
    };

    static postLogin = (req, res) => {
        this.userData = req.body;

        User.findOne({
            email: { $eq: this.userData.email }
        }, (error, user) => {
            if (error) {
                console.error(error);
            }
            
            if (!user) {
                res.status(401).json({
                    statusCode: 401,
                    errorMessage: 'Invalid Email!'
                });
            } else {
                bcrypt.compare(this.userData.password, user.password, (error, result) => {
                    if (!result) {
                        res.status(401).json({
                            statusCode: 401,
                            errorMessage: 'Invalid Password!'
                        });
                    } else {
                        let payload = {
                            _id: user._id,
                            email: user.email,
                            name: user.name,
                            profileImageUrl: user.profileImageUrl,
                            role: user.role
                        };
                        let token = jwt.sign(payload, process.env.SECRET_KEY);
                        res.status(200).json(token);
                    }
                });
            }
                
                
        });
    };

    static getRegister = (req, res) => {
        res.status(200).json({message:'GET/ register not implemented'});
    };

    static postRegister = (req, res) => {
        this.userData = req.body;
    
        bcrypt.hash(this.userData.password, parseInt(process.env.SALT_ROUNDS), (err, hash) => {
            this.userData.password = hash;
            this.user = new User(this.userData);
            this.user.save((error, registeredUser) => {
                if (error) {
                    console.error(error);
                } else {
                    res.status(200).send(registeredUser);
                }
            });
        });
    
    };
}



module.exports = AuthController;