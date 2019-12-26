
// Posting to create new treatment, body content
// {
// 	"c_id": "5deea470fb5c5624244fbda2",
	// "name": "Teeth Removal",
	// "info": "Teeth removal with flamethrower",
	// "priceLow":"2000",
	// "priceHigh":"5000",
	// "currency":"TL"
// }

const express = require('express');
const router = express.Router();

const Treatment = require('../../models/Treatments');
const Clinic = require('../../models/Clinics');


//==========================================================================================
//======================    GET CALLS   ====================================================
//==========================================================================================

// @route   Get api/treatment
// @desc    Get all treatments
// @access  Public

router.get('/', (req, res) =>{
    Treatment.find()
    .sort({id: -1}) 
    .then( treatment => res.json(treatment) ) 
});


//==========================================================================================
//======================    END OF GET CALLS   =============================================
//==========================================================================================
//======================   POST CALLS  ======================( Done all)====================
//==========================================================================================


// @route   POST api/treatments/newTreatment/:clinic_id
// @desc    Create a treatment
// @access  Public

router.post('/newTreatment/:clinic_id', (req, res) =>{

    var id = req.params.clinic_id;

    const newTreatment = new Treatment({
        name: req.body.name,
        info: req.body.info,
        priceLow: req.body.priceLow,
        priceHigh: req.body.priceHigh,
        currency: req.body.currency
    });

    newTreatment.save().then( newT => {
        console.log( newT._id);
        Clinic.updateOne(
            { "_id": id },
            { $push: { "treatments": newT._id }   }
        ).then( clinicUpdate =>{
            res.status(200).json({  new_Treatment_Insertion: true, updated_Clinics_Treatment_References: true  })
        })
        .catch( err =>{
            Treatment.findById(  newT._id )
            .then( treatment => treatment.remove().then( ()=> res.status(404).json({new_Treatment_Insertion: false,
                                                                                    removed_New_Treatment_To_Perserve_Database  :true})))
            .catch(err => res.status(404).json({removed_New_Treatment_To_Perserve_Database: false}));
        });
    }
    );

});



//==========================================================================================
//======================    END OF Post CALLS   ============================================
//==========================================================================================
//======================    PUT CALLS  =================( Done all)=========================
//==========================================================================================


// @route   Get api/treatments/'whatToChange'/'newValue'/id
// @desc    Change an attribute to the treatment with the given id
// @access  Public

router.put('/updateOneAttribute/:id', (req, res) =>{
    
    var id = req.params.id;
    var whatToChange = req.body.whatToChange;
    var newValue = req.body.newValue;

    console.log("[" + whatToChange + "][" + newValue + "]");

    var change = {};
    change[whatToChange] = newValue

    Treatment.updateOne(
        {"_id" : id},
        { $set: change
                 
        }
    ).then( userUpdated =>{
        res.status(200).json({user_Single_Information_Update: true});
    });
})



// @route   POST api/treatments/updateInformation/id
// @desc    Update the basic information for the treatment with matching id
// @access  Private

router.put('/updateInformation/:id' , (req, res)=> {
    
    var id = req.params.id;

    var name = req.body.name;
    var info = req.body.info;
    var priceLow = req.body.priceLow;
    var priceHigh = req.body.priceHigh;
    var currency = req.body.currency;

    Treatment.updateOne(
        {"_id" : id},
        { $set: { "name" : name,
                 "info" : info,
                 "priceLow" : priceLow,
                 "priceHigh" : priceHigh,
                 "currency" : currency
                } 
        }
    ).then( treatmentUpdate =>{
        res.status(200).json({treatment_Information_Update: true});
    });
})



//==========================================================================================
//======================    END OF PUT CALLS   ============================================
//==========================================================================================
//======================    DELTE CALLS  =========( Done all)===============================
//==========================================================================================


// @route   POST api/treatments/deleteAll
// @desc    Delete all treatments
// @access  Private

router.delete('/deleteAll' , (req, res)=> {
    
    Treatment.remove({ })
    .then( ()=> res.json({all_treatments_deleted:true}))
    .catch(err => res.status(404).json({all_treatments_deleted: false, error: err}));

});

// @route   POST api/treatments/one/id
// @desc    Delete one treatment with matching id
// @access  Private

router.delete('/one/:id' , (req, res)=> {
    var id = req.params.id;
    
    Treatment.remove({ "_id" : id })
    .then( ()=> res.json( {treatment_deletion:true} ) )
    .catch( err => res.status(404).json({treatment_deletion: false, error: err})  );

})


//==========================================================================================
//======================    END OF DELETE CALLS   ==========================================
//==========================================================================================


module.exports = router;


