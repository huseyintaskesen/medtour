//  Posting to create new clinic, body content
// {
// 	"name": "NewClinicPl0x12",
// 	"city": "ehaaa",
//   "type": "Dentist",
//   "address": "Pidhropshmeri",
// 	"rating":"5",
// 	"email":"newClinic@gmail.com",
// 	"bio":"very very gooooooood clinic"
// }s

const express = require('express');
const router = express.Router();
const config = require("config");

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Clinic Model
const Clinic = require('../../models/Clinics');
const Treatment = require('../../models/Treatments');
const Ratings = require('../../models/Ratings');

// @route   Get api/clinics
// @desc    Get all Clinics
// @access  Public

router.get('/', (req, res) =>{
    Clinic.find()
    .sort({id: -1}) 
    .then( clinics => res.json(clinics) ) 
});


router.get("/search/:treatmentType" , (req, res) => {
    
    var treatmentType = req.params.treatmentType.replace("_"," ");

    const client = new MongoClient( "mongodb+srv://Qikabodi:bilkentbitirme@cluster0-mezhk.mongodb.net/test?retryWrites=true&w=majority"  , { useUnifiedTopology: true });
    
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server to fetch search result");
    
      const db = client.db("MedTourMain");

       db.collection("treatments").aggregate(
           [
            {
                $match:{
                    name: treatmentType
                }
            },
            {
                $lookup:{
                    from: "clinics",
                    localField: "c_id",
                    foreignField: "_id",
                    as: "newClinic"
                }
            }
        ]).toArray().then( result => {

            var clinicsArr = [];
            
            result.forEach(resultTreatment => {
                (resultTreatment.newClinic).forEach(clinic  => {
                    console.log(" -[" + treatmentType + "][" +   clinic.name + "]");
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
    var clinicId = req.params.id;
    Clinic.findById(clinicId)
    .then( clinics => {
        
        Treatment.find({"c_id": clinicId })
                .then( treatments => {

                    Ratings.find({"c_id": clinicId })
                        .then( ratings => res.send({ clinics, treatments, ratings }) );

                })
    })
});

// @route   POST api/clinics
// @desc    Create a Clinics
// @access  Private

router.post('/', (req, res) =>{

    const newClinic = new Clinic({
        name: req.body.name,
        city: req.body.location,
        type: req.body.type,
        address: req.body.address,
        rating: req.body.rating,
        email: req.body.email,
        bio: req.body.bio
    });

    newClinic.save().then(()=> res.json({insertion: true}));

});

// @route   POST api/clinics/id
// @desc    Delete a Clinics
// @access  Private

router.delete('/:id' , (req, res)=> {
    Clinic.findById(req.params.id)
    .then( clinic => clinic.remove().then( ()=> res.json({success:true})))
    .catch(err => res.status(404).json({success: false}));
})
     

module.exports = router;


