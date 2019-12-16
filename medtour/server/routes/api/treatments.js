
//  Posting to create new treatment, body content
// {
// 	"c_id": "5deea470fb5c5624244fbda2",
// 	"name": "Teeth Removal",
// 	"info": "Teeth removal with flamethrower",
// 	"priceLow":"2000",
// 	"priceHigh":"5000",
// 	"currency":"TL"
// }

const express = require('express');
const router = express.Router();

//Treatment Model
const Treatment = require('../../models/Treatments');

// @route   Get api/treatment
// @desc    Get all treatments
// @access  Public

router.get('/', (req, res) =>{
    Treatment.find()
    .sort({id: -1}) 
    .then( treatment => res.json(treatment) ) 
});

// @route   Get api/treatments/c_id
// @desc    Get all treatments of a clinic with matching c_id
// @access  Public

router.get('/:c_id', (req, res) =>{
    var c_id = req.params.c_id;
    Treatment.find({"c_id": c_id })
    .then( treatments => res.json(treatments) )
});

// @route   POST api/treatment
// @desc    Create a treatment
// @access  Public

router.post('/', (req, res) =>{

    const newTreatment = new Treatment({
        c_id: req.body.c_id,
        name: req.body.name,
        info: req.body.info,
        priceLow: req.body.priceLow,
        priceHigh: req.body.priceHigh,
        currency: req.body.currency
    });

    newTreatment.save().then(()=> res.json({insertion_for_treatment: true}));

});

// @route   POST api/treatments/all/id
// @desc    Delete all treatments for clinic with matching id
// @access  Private

router.delete('/all/:c_id' , (req, res)=> {
    var c_id = req.params.c_id;
    
    Treatment.remove({ "c_id" : c_id })
    .then( ()=> res.json({all_treatments_deletion:true}))
    .catch(err => res.status(404).json({all_treatments_deletion: false, error: err}));

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
     

module.exports = router;


