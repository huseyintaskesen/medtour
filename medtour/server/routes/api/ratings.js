
//  Posting to create new rating, body content
// {
// 	"u_id": "5dee271746069a305cde344f",
// 	"c_id": "5deea470fb5c5624244fbda2",
// 	"comment": "very very good performance",
// 	"rating": 9
// }

const express = require('express');
const router = express.Router();


//Treatment Model
const Ratings = require('../../models/Ratings');

// @route   Get api/ratings
// @desc    Get all ratings
// @access  Public

router.get('/', (req, res) =>{
    Ratings.find()
    .sort({id: -1}) 
    .then( rating => res.json(rating) ) 
});

// @route   Get api/ratings/c_id
// @desc    Get all ratings of a clinic with matching c_id
// @access  Public

router.get('/:c_id', (req, res) =>{
    var c_id = req.params.c_id;

    Ratings.find({"c_id": c_id })
    .then( ratings => res.json({ ratings }) );

});

// @route   POST api/ratings
// @desc    Create a rating
// @access  Public

router.post('/', (req, res) =>{

    const newRating = new Ratings({
        u_id: req.body.u_id,
        c_id: req.body.c_id,
        comment: req.body.comment,
        rating: req.body.rating
    });

    newRating.save()
    .then(()=> res.json({insertion_for_rating: true}))
    .catch( err => res.status(400).json({insertion_for_rating: false, error: err}));

});

// @route   POST api/ratings/all/c_id
// @desc    Delete all ratings for clinic with matching c_id
// @access  Private

router.delete('/all/:c_id' , (req, res)=> {

    var c_id = req.params.c_id;
    Ratings.remove({ "c_id" : c_id })
    .then( ()=> res.json({all_ratings_deletion_for_clinic:true}))
    .catch(err => res.status(404).json({all_ratings_deletion_for_clinic: false, error: err}));

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
     

module.exports = router;


