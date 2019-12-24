const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/User');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// @route   Post api/users
// @desc    User Sign Up
// @access  Public

// params 
// Headers: Content-Type: application/json
    // {
    // 	"name": "test name",
    // 	"surname": "test surname",
    // 	"userName": "testt",
    // 	"password":"19191919230",
    // 	"email":"testemail@gmail.com"
    // }
// returns 
// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjdiZTRiMmVhYzVjNDkzNDMyMWI2OCIsImlhdCI6MTU3NjUxNzE5NSwiZXhwIjoxNTc2NTIwNzk1fQ._j0kzdX4CUKSK_REiaZmu3H_I2JpP-rvB_l0ca555ug",
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
                                    },
                                    loggedIn: "User"
                                });
                            }
                        )
                    });
                })
            })
        }
    })


});


// @route   Get api/users/'whatToChange'/'newValue'/id
// @desc    Change an attribute to the user with the given id
// @access  Public

router.put('/updateOneAttribute/:id', (req, res) =>{
    
    var id = req.params.id;
    var whatToChange = req.body.whatToChange;
    var newValue = req.body.newValue;

    console.log("[" + whatToChange + "][" + newValue + "]");

    var change = {};
    change[whatToChange] = newValue

    User.updateOne(
        {"_id" : id},
        { $set: change
                 
        }
    ).then( userUpdated =>{
        res.status(200).json({user_Single_Information_Update: true});
    });
})


module.exports = router;


