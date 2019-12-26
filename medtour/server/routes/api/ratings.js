
//  Posting to create new rating, body content
// {
// 	"u_id": "5dee271746069a305cde344f",
// 	"name": "Skerd",
// 	"comment": "very very good performance",
// 	"rating": 9
// }

const express = require('express');
const router = express.Router();

const Ratings = require('../../models/Ratings');
const Clinic = require("../../models/Clinics");


//==========================================================================================
//======================    GET CALLS   ====================================================
//==========================================================================================

// @route   Get api/ratings
// @desc    Get all ratings
// @access  Public

router.get('/', (req, res) =>{
    Ratings.find()
    .populate("u_id")
    .sort({id: -1}) 
    .then( rating => res.json(rating) ) 
});


//==========================================================================================
//======================    END OF GET CALLS   =============================================
//==========================================================================================
//======================   POST CALLS  ======================( Done all)====================
//==========================================================================================


// @route   POST api/ratings
// @desc    Create a rating
// @access  Public

router.post('/:clinic_id', (req, res) =>{

    var id = req.params.clinic_id;
    var ratingg = req.body.rating;

    if( ratingg > 5 || ratingg < 1 ){
        res.status(400).json({ rating_Within_Range: false, new_Rating_Insertion: false});
        return;
    }

    const newRating = new Ratings({
        u_id: req.body.u_id,
        name: req.body.name,
        comment: req.body.comment,
        rating: ratingg
    });

    newRating.save()
    .then( rating => {

        Clinic.updateOne(
            { "_id": id },
            { $push: { "reviews": rating._id }   }
        ).then( () =>{

            Clinic.findById(id).select("ratingAverage").then( result =>{
                var newAverage = (result.ratingAverage + ratingg) / 2 ;
                Clinic.updateOne(
                    {"_id" : id},
                    { $set: { "ratingAverage":  newAverage } }
                ).then(result =>{
                    res.json({new_Rating_Insertion: true, updated_Clinics_Rating_References  :true})
                })
                .catch( error =>{
                    console.log(error);
                    Ratings.findById(  rating._id )
                    .then( ratings => ratings.remove().then( ()=> res.status(404).json({new_Rating_Insertion: false,
                                                                                        updated_Clinics_Rating_References  :true})))
                    .catch(err => res.status(404).json({removed_New_Treatment_To_Perserve_Database: false}));
                })
            })
 
        })
        .catch( error =>{
            console.log(error);
            Ratings.findById(  rating._id )
            .then( ratings => ratings.remove().then( ()=> res.status(404).json({new_Rating_Insertion: false,
                                                                                updated_Clinics_Rating_References  :true})))
            .catch(err => res.status(404).json({removed_New_Treatment_To_Perserve_Database: false}));
        } )

    })
    .catch( err => {
        res.status(400).json({insertion_for_rating: false, error: err})
    });

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



// @route   POST api/ratings/all/c_id
// @desc    Delete all ratings for clinic with matching c_id
// @access  Private

router.delete('/deleteAll' , (req, res)=> {

    Ratings.remove({ })
    .then( ()=> res.json({all_Ratings_Deleted : true}))
    .catch(err => res.status(404).json({all_Ratings_Deleted: false, error: err}));

});

// @route   POST api/ratings/one/id
// @desc    Delete one rating with matching id
// @access  Private

router.delete('/one/:id' , (req, res)=> {
    var id = req.params.id;
    
    Ratings.remove({ "_id" : id })
    .then( ()=> res.json( {rating_deletion:true} ) )
    .catch( err => res.status(404).json({rating_deletion: false, error: err})  );

})



//==========================================================================================
//======================    END OF DELETE CALLS   ==========================================
//==========================================================================================

     

module.exports = router;


