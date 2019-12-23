

// {
// 	"name": "",
// 	"surname" : "",
// 	"email":"",
//  "jobName" : "",
//  "specializations" : "",
//  "languages" : "",
//  "bio" : "",
//  "title" : ""
// }

const express = require('express');
const router = express.Router();
const config = require("config");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const Clinic = require('../../models/Clinics');
const Doctor = require('../../models/Doctors');



//==========================================================================================
//======================    GET CALLS   ====================================================
//==========================================================================================

// @route   Get api/doctors
// @desc    Get all doctors
// @access  Public
router.get('/', (req, res) =>{
    Doctor.find()
    .sort({id: -1})
    .then( doctor => res.json(doctor) ) 
});

// @route   Get api/doctors/id
// @desc    Get the doctor that matches the given id
// @access  Public

router.get('/:id', (req, res) =>{
    Doctor.findById( req.params.id )
    .then( clinics => {  res.send({ clinics }) })
});



//==========================================================================================
//======================    END OF GET CALLS   =============================================
//==========================================================================================
//======================   POST CALLS  ======================(  all)====================
//==========================================================================================

// @route   POST api/doctors/id
// @desc    Create a new doctor and add it to the clinic
// @access  public

router.post('/newDoctor/:clinic_id', (req, res) =>{

    var id = req.params.clinic_id;

    const newDoctor = new Doctor({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        jobName: req.body.jobName,
        specializations: req.body.specializations,
        languages: req.body.languages,
        bio: req.body.bio,
        title: req.body.title
    });

    newDoctor.save()
    .then( doctor => {

        Clinic.updateOne(
            { "_id": id },
            { $push: { "doctors": doctor._id }   }
        ).then( () =>{
            res.json({new_Doctor_Insertion: true, updated_Clinics_Doctor_References  :true})
        })
        .catch( ()=>{
            Doctor.findById(  doctor._id )
            .then( doctor => doctor.remove().then( ()=> res.status(404).json({new_Doctor_Insertion: false,
                                                                                updated_Clinics_Doctor_References  :true})))
            .catch(err => res.status(404).json({removed_New_Doctor_To_Perserve_Database: false}));
        } )

    })
    .catch( err => {
        res.status(400).json({new_Doctor_Insertion: false, error: err})
    });

});



//==========================================================================================
//======================    END OF Post CALLS   ============================================
//==========================================================================================
//======================    PUT CALLS  =================(  all)=========================
//==========================================================================================


// @route   POST api/doctors/updateDoctor/id
// @desc    Update the basic information for the doctor with matching id
// @access  Private

router.put('/updateDoctor/:id' , (req, res)=> {
    
    var id = req.params.id;

    var name = req.body.name;
    var surname = req.body.surname;
    var email = req.body.email;
    var jobName = req.body.jobName;
    var specializations = req.body.specializations;
    var languages = req.body.languages;
    var bio = req.body.bio;
    var title = req.body.title;

    console.log( id );

    Doctor.updateOne(
        {"_id" : id},
        { $set: {"name" : name,
                 "surname" : surname,
                 "email" : email,
                 "jobName" : jobName,
                 "specializations" : specializations,
                 "languages" : languages,
                 "bio" : bio,
                 "title" : title,
                } 
        }
    ).then( clinicUpdate =>{
        res.status(200).json({doctor_Information_Update: true});
    });
})



//==========================================================================================
//======================    END OF PUT CALLS   =============================================
//==========================================================================================
//======================    DELTE CALLS  =========(  all)===============================
//==========================================================================================

// @route   POST api/doctors/id
// @desc    Delete a doctor with given id
// @access  Private

router.delete('/:id' , (req, res)=> {
    Doctor.findById(req.params.id)
    .then( doctor => doctor.remove().then( ()=> res.json({doctor_Deletion :true})))
    .catch(err => res.status(404).json({doctor_Deletion: false}));
})



//==========================================================================================
//======================    END OF DELETE CALLS   ==========================================
//==========================================================================================



module.exports = router;
