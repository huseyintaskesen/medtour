
// {
	// "phoneType": "Landline",
	// "phoneNumber": "+355674858248"
// }

const express = require('express');
const router = express.Router();

const PhoneNumber = require('../../models/PhoneNumbers');
const Clinic = require("../../models/Clinics");


//==========================================================================================
//======================    GET CALLS   ====================================================
//==========================================================================================

// @route   Get api/phoneNumbers
// @desc    Get all phone numbers
// @access  Public

router.get('/', (req, res) =>{
    PhoneNumber.find()
    .sort({_id: -1}) 
    .then( phone => res.json(phone) ) 
});


//==========================================================================================
//======================    END OF GET CALLS   =============================================
//==========================================================================================
//======================   POST CALLS  ======================( Done all)====================
//==========================================================================================


// @route   POST api/user_type/id
// @desc    Create a phone number to the user with given id
// @access  Public

router.post('/:user_type/:id', (req, res) =>{

    var user_id = req.params.id;
    var user_type = req.params.user_type;

    const newPhoneNumber = new PhoneNumber({
        phoneType: req.body.phoneType,
        phoneNumber: req.body.phoneNumber
    });

    newPhoneNumber.save()
    .then( phone => {

        if( user_type == "clinic"){

            Clinic.updateOne(
                { "_id": user_id },
                { $push: { "phoneNumbers": phone._id }   }
            ).then( () =>{
                res.json({new_Phone_Number_Insertion: true, updated_Clinics_PhoneNumber_References  :true})
            })
            .catch( ()=>{
                PhoneNumber.findById(  phone._id )
                .then( phone => phone.remove().then( ()=> res.status(404).json({new_Phone_Number_Insertion: false,
                                                                                updated_Clinics_PhoneNumber_References  :true})))
                .catch(err => res.status(404).json({updated_Clinics_PhoneNumber_References: false}));
            } )

        }
        else if( user_type == "user"){

            User.updateOne(
                { "_id": user_id },
                { $push: { "phoneNumbers": phone._id }   }
            ).then( () =>{
                res.json({new_Phone_Number_Insertion: true, updated_User_PhoneNumber_References  :true})
            })
            .catch( ()=>{
                PhoneNumber.findById(  phone._id )
                .then( phone => phone.remove().then( ()=> res.status(404).json({new_Phone_Number_Insertion: false,
                                                                                updated_User_PhoneNumber_References  :true})))
                .catch(err => res.status(404).json({updated_User_PhoneNumber_References: false}));
            } )

        }


    })
    .catch( err => {
        res.status(400).json({new_Phone_Number_Insertion: false, error: err})
    });

    

});



//==========================================================================================
//======================    END OF Post CALLS   ============================================
//==========================================================================================
//======================    DELTE CALLS  =========( Done all)===============================
//==========================================================================================


// @route   POST api/phoneNumber/deleteAll
// @desc    Delete all phone numbers
// @access  Private

router.delete('/deleteAll' , (req, res)=> {

    PhoneNumber.remove({ })
    .then( ()=> res.json({all_Phone_Numbers_Deleted : true}))
    .catch(err => res.status(404).json({all_Phone_Numbers_Deleted: false, error: err}));

});

// @route   POST api/phoneNumber/one/id
// @desc    Delete one phone number with given id
// @access  Private

router.delete('/one/:id' , (req, res)=> {
    var id = req.params.id;
    
    PhoneNumber.remove({ "_id" : id })
    .then( ()=> res.json( {phone_Number_Deleted:true} ) )
    .catch( err => res.status(404).json({phone_Number_Deleted: false, error: err})  );

})


//==========================================================================================
//======================    END OF DELETE CALLS   ==========================================
//==========================================================================================

     

module.exports = router;


