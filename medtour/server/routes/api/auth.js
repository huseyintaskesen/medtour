const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');
const Clinic = require('../../models/Clinics');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const auth = require('../../middleware/auth');

// @route   Post api/auth/user
// @desc    Auth user
// @access  Public

router.post('/user', (req, res) =>{
    
    const { password, email } = req.body;

    //Simple validation

    if( !password || !email ){
        return res.status(400).json({ msg: 'Please enter all fields!'});
    }

    //Check for existing user
    User.findOne({email})
    .then( userr => {
        if( !userr ){
            return res.status(400).json({ msg: 'User does not exist!', isLoginSuccessful: false});
        } 
        else{
            //Validate pass
            bcrypt.compare(password, userr.password)
            .then( isMatch =>{
                if( !isMatch) return res.status(400).json({msg: 'Invalid credentials',isLoginSuccessful: false});

                jwt.sign(
                    { id: userr.id},
                    config.get('jwtSecret'),
                    { expiresIn: 3600 },
                    ( err, token )=> {
                        if(err)
                            throw err;
                        res.json({
                            token,
                            userr: {
                                id: userr.id,
                                name: userr.name,
                                surname: userr.surname,
                                userName: userr.userName,
                                password: userr.password,
                                email: userr.email
                            },
                            isLoginSuccessful: true
                        });
                    }
                )

            })
        }
    })


});


// @route   Post api/auth/clinic
// @desc    Auth clinic
// @access  Public

router.post('/clinic', (req, res) =>{
    
    const { password, email } = req.body;

    //Simple validation

    if( !password || !email ){
        return res.status(400).json({ msg: 'Please enter all fields!'});
    }

    //Check for existing user
    Clinic.findOne({email})
    .then( clinic => {
        if( !clinic ){
            return res.status(400).json({ msg: 'Clinic does not exist!', isLoginSuccessful: false});
        } 
        else{
            //Validate pass
            bcrypt.compare(password, clinic.password)
            .then( isMatch =>{
                if( !isMatch) return res.status(400).json({msg: 'Invalid credentials',isLoginSuccessful: false});

                jwt.sign(
                    { id: clinic.id},
                    config.get('jwtSecret'),
                    { expiresIn: 3600 },
                    ( err, token )=> {
                        if(err)
                            throw err;
                        res.json({
                            token,
                            clinic: {
                                id: clinic.id,
                                name: clinic.name,
                                email: clinic.email
                            },
                            isLoginSuccessful: true,
                            loggedInAs: "Clinic"
                        });
                    }
                )

            })
        }
    })


});


// @route   GET api/auth/clinic
// @desc    Get user data
// @access  Private

router.get('/user', auth, (req, res) =>{

    User.findById(req.user.id)
    .select('-password')
    .then( user =>{
        res.json(user);
    })
});

     

module.exports = router;


