const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const auth = require('../../middleware/auth');

// @route   Post api/auth
// @desc    Sign user in
// @access  Public
// params 
// Content-Type: application/json
// returns 
// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjdiZTRiMmVhYzVjNDkzNDMyMWI2OCIsImlhdCI6MTU3NjUxNzMxMywiZXhwIjoxNTc2NTIwOTEzfQ.3aHvk1GVuzME_QkROnm84O6ERnZgnyURTLILiZvWboE",
//     "userr": {
//         "id": "5df7be4b2eac5c4934321b68",
//         "name": "test name",
//         "surname": "test surname",
//         "userName": "testt",
//         "password": "$2a$10$ADiVT.NXvZKzBoOkE8Ss0u/hm8WTpGPQSXTn2tArvAdkXEnzNo1kG",
//         "email": "testemail2@gmail.com"
//     }
// }



router.post('/', (req, res) =>{
    
    const { email, password } = req.body;

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


// @route   GET api/auth/user
// @desc    Get user data with their ID 
// @access  Private
// @params 
// id: user id
// x-auth-token: user token


router.get('/user', auth, (req, res) =>{

    User.findById(req.user.id)
    .select('-password')
    .then( user =>{
        res.json(user);
    })
});

     

module.exports = router;


