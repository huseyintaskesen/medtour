const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// @route   Get api/users
// @desc    Get all users
// @access  Public

router.post('/', (req, res) =>{
    
    const {name, surname, userName, password, email } = req.body;

    //Simple validation

    if( !name || !surname || !userName || !password || !email ){
        return res.status(400).json({ msg: 'Please enter all fields!'});
    }

    //Check for existing user
    User.findOne({email})
    .then( user => {
        if( user ){
            return res.status(400).json({ msg: 'User already exists with this email!'});
        } 
        else{
            const newUser = new User({
                name, surname, userName, password, email 
            });

            //Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {

                if(err) throw err;

                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err) throw err;

                    newUser.password = hash;
                    newUser.save()
                    .then( userr => {

                        jwt.sign(
                            { id: userr.id},
                            config.get('jwtSecret'),
                            { expiresIn: 3600 },
                            (err, token )=> {
                                if(err)
                                    throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: userr.id,
                                        name: userr.name,
                                        surname: userr.surname,
                                        userName: userr.userName,
                                        password: userr.password,
                                        email: userr.email
                                    }
                                });
                            }
                        )
                    });
                })
            })
        }
    })


});

     

module.exports = router;


