//  Posting to create new clinic, body content
// {
// 	"name": "NewClinicPl0x12",
// 	"city": "ehaaa",
//  "type": "Dentist",
//  "address": "Pidhropshmeri",
// 	"rating":"5",
// 	"email":"newClinic@gmail.com",
// 	"bio":"very very gooooooood clinic"
// }

const express = require('express');
const router = express.Router();
const config = require("config");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const Clinic = require('../../models/Clinics');


//==========================================================================================
//======================    GET CALLS   ====================================================
//==========================================================================================


// @route   Get api/clinics
// @desc    Get all Clinics
// @access  Public
router.get('/', (req, res) =>{
    Clinic.find()
    .sort({id: -1})
    .populate('treatments')
    .populate("reviews")
    .populate("phoneNumbers")
    .then( clinics => res.json(clinics) ) 
});


// @route   Get: api/clinics/search/clinicType
// @desc    Get all clinics with a certain clinic type
// @access  Public

router.get("/search/:searchParam" , (req, res) => {
    
    var searchParam = req.params.searchParam.replace("_"," ");

    Clinic.find({type: searchParam})
    .populate("treatments")
    .populate("reviews")
    .populate("phoneNumbers")
    .then( result => {
        res.status(200).json(result);
    })

});


// @route   Get: api/search/treatment/clinicType
// @desc    Get all clinics with a certain treatment
// @access  Public

router.get("/search/treatment/:searchParam" , (req, res) => {
    
    var searchParam = req.params.searchParam.replace("_"," ");

    const client = new MongoClient( "mongodb+srv://Qikabodi:bilkentbitirme@cluster0-mezhk.mongodb.net/test?retryWrites=true&w=majority"  , { useUnifiedTopology: true });
    
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server to fetch search result");
    
      const db = client.db("MedTourMain");

       db.collection("treatments").aggregate(
           [
            {
                $match:{
                    name: searchParam
                }
            },
            {
                $lookup:{
                    from: "clinics",
                    localField: "c_id",
                    foreignField: "_id",
                    as: "newClinic"
                }
            }//,
            // {
            //     $lookup:{
            //         from: "treatments",
            //         localField: "c_id",
            //         foreignField: "c_id",
            //         as: "newClinic"
            //     }
            // }
        ]).toArray().then( result => {

            var clinicsArr = [];
            
            result.forEach(resultTreatment => {
                (resultTreatment.newClinic).forEach(clinic  => {
                    console.log(" -[" + searchParam + "][" +   clinic.name + "]");
                    clinicsArr.push( clinic );
                });
            });

            res.send( clinicsArr );

            client.close();
            console.log("Disconnected successfully from server after fetching search result");

        });
    });

});


// @route   Get api/clinics/id
// @desc    Get all Clinics matching id
// @access  Public

router.get('/:id', (req, res) =>{
    Clinic.findById( req.params.id )
    .populate('treatments')
    .populate("reviews")
    .populate("phoneNumbers")
    .populate("doctors")
    .then( clinics => {  res.send({ clinics }) })
});


//==========================================================================================
//======================    END OF GET CALLS   =============================================
//==========================================================================================
//======================   POST CALLS  ======================( Done all)====================
//==========================================================================================

// @route   POST api/clinics/newClinic
// @desc    Create a new clinic account
// @access  public

router.post('/newClinic', (req, res) =>{
    
    const {name, password, email} = req.body;

    //Simple validation

    if( !name || !password || !email ){
        return res.status(400).json({ msg: 'Please enter all fields to register a new Clinic!'});
    }

    //Check for existing user
    Clinic.findOne({email})
    .then( clinic => {
        if( clinic ){
            return res.status(400).json({ msg: 'A clinic already exists with this email!'});
        } 
        else{
            const newClinic = new Clinic({
                name, password, email 
            });

            //Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {

                if(err) throw err;

                bcrypt.hash(newClinic.password, salt, (err, hash)=>{
                    if(err) throw err;

                    newClinic.password = hash;
                    newClinic.save()
                    .then( newClinicRegistered => {

                        jwt.sign(
                            { id: newClinicRegistered.id},
                            config.get('jwtSecret'),
                            { expiresIn: 3600 },
                            (err, token )=> {
                                if(err)
                                    throw err;
                                res.json({
                                    token,
                                    clinic: {
                                        id: newClinicRegistered.id,
                                        name: newClinicRegistered.name,
                                        password: newClinicRegistered.password,
                                        email: newClinicRegistered.email
                                    },
                                    loggedIn: "Clinic"
                                });
                            }
                        )
                    });
                })
            })
           
        }
    })


});


//==========================================================================================
//======================    END OF Post CALLS   ============================================
//==========================================================================================
//======================    PUT CALLS  =================( Done all)=========================
//==========================================================================================


// @route   POST api/clinics/addTreatment/id
// @desc    Add a new tretment to the clinic with matching id
// @access  Private

router.put('/newTreatment/:id' , (req, res)=> {
    
    var id = req.params.id;

    Clinic.updateOne(
        { "_id": id },
        {$push: { "treatments": id

                
            } 
        }
    ).then( clinicUpdate =>{
        res.status(200).json({  new_Treatment_Insertion: true  })
    })
    .catch( err =>{
        res.status(400).json("Treatment addition failed!");
    });

})


// @route   PUT api/clinics/updateInformation/id
// @desc    Update the basic information for the clinic with matching id
// @access  Private

router.put('/updateInformation/:id' , (req, res)=> {
    
    var id = req.params.id;

    var name = req.body.name;
    var city = req.body.city;
    var type = req.body.type;
    var address = req.body.address;
    var email = req.body.email;
    var bio = req.body.bio;
    

    console.log( id );

    Clinic.updateOne(
        {"_id" : id},
        { $set: { "name" : name,
                 "city" : city,
                 "type" : type,
                 "address" : address,
                 "email" : email,
                 "bio" : bio
                } 
        }
    ).then( clinicUpdate =>{
        res.status(200).json({clinic_Information_Update: true});
    });
})


//==========================================================================================
//======================    END OF PUT CALLS   =============================================
//==========================================================================================
//======================    DELTE CALLS  =========( Done all)===============================
//==========================================================================================


// @route   DELETE api/clinics/id
// @desc    Delete a Clinics
// @access  Private

router.delete('/:id' , (req, res)=> {
    Clinic.findById(req.params.id)
    .then( clinic => clinic.remove().then( ()=> res.json({clinic_Deletion :true})))
    .catch(err => res.status(404).json({clinic_Deletion: false}));
})



//==========================================================================================
//======================    END OF DELETE CALLS   ==========================================
//==========================================================================================


module.exports = router;


