

// {
// 	"u_id": "5dee9f7b53e5670d6075500d",
// 	"t_id": "5e001e73d4a6f30138ffe5ab",
// 	"c_id": "5dfe3f6e79469144a4653524",

//  "treatment_Date" : "2019-12-23T00:21:39.033+00:00",
	
// 	"departure_one":"2019-12-23T00:21:39.033+00:00",
// 	"location_one":"Ankara, Otogar",
// 	"type_one":"Bus/Shuttle",
// 	"price_one":"152",
// 	"currency_one":"Turkish Lira",
	
// 	"departure_two":"2019-12-23T00:21:39.033+00:00",
// 	"location_two":"Paris, CDG Airport",
// 	"type_two":"Airplane",
// 	"price_two":"120",
// 	"currency_two":"Euro",
	
// 	"name":"Hotel Washington",
// 	"location":"Paris, 065002 Street",
// 	"type":"Hotel",
// 	"rating":"5.6",
// 	"price":"155",	
// 	"currency":"Euro",
// 	"checkIn":"2019-12-23T00:21:39.033+00:00",
// 	"checkOut":"2019-12-23T00:21:39.033+00:00"
// }

const express = require('express');
const router = express.Router();

var app = express();

const TourData = require('../../models/TourData');
const Transportation = require('../../models/Transportation');
const Accomodation = require('../../models/Accomodation');


//==========================================================================================
//======================    GET CALLS   ====================================================
//==========================================================================================

// @route   Get api/tourData
// @desc    Get all tour data 
// @access  Public
router.get('/', (req, res) =>{
    TourData.find()
    .sort({id: -1})
    .then( doctor => res.json(doctor) ) 
});


// @route   Get api/tourData/id
// @desc    Get the tour data that matches the given id
// @access  Public

router.get('/:id', (req, res) =>{
    TourData.findById( req.params.id )
    .populate("u_id")
    .populate("c_id")
    .populate("t_id")
    .populate("transportation_Departure_id")
    .populate("transportation_Return_id")
    .populate("accomodation_id")
    .then( trans => {  res.send({ trans }) })
});

// @route   Get api/tourData/user/id
// @desc    Get the tour data that matches the given user id
// @access  Public

router.get('/user/:id', (req, res) =>{
    TourData.find({ u_id: req.params.id } )
    .populate("u_id")
    .populate("c_id")
    .populate("t_id")
    .populate("transportation_Departure_id")
    .populate("transportation_Return_id")
    .populate("accomodation_id")
    .then( trans => {  res.send({ trans }) })
});

// @route   Get api/tourData/clinic/id
// @desc    Get the tour data that matches the given clinic id
// @access  Public

router.get('/clinic/:id', (req, res) =>{
    TourData.find({ c_id: req.params.id } )
    .populate("u_id")
    .populate("c_id")
    .populate("t_id")
    .then( trans => {  res.send({ trans }) })
});



//==========================================================================================
//======================    END OF GET CALLS   =============================================
//==========================================================================================
//======================   POST CALLS  ======================( Done all)====================
//==========================================================================================


// @route   Get api/tourData/newTour
// @desc    Get the transportation that matches the given id
// @access  Public

// @params in the body{}

router.post('/newTour', (req, res) =>{
    
    var transportation_one_id;
    var transportation_two_id;

    var tranportationOne = new Transportation({
        departure: req.body.departure_one,
        location: req.body.location_one,
        type: req.body.type_one,
        price: req.body.price_one,
        currency: req.body.currency_one
    });

    var tranportationTwo = new Transportation({
        departure: req.body.departure_two,
        location: req.body.location_two,
        type: req.body.type_two,
        price: req.body.price_two,
        currency: req.body.currency_two
    });


    var accomodation = new Accomodation({
        name: req.body.name,
        location: req.body.location,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        currency: req.body.currency,
        checkIn: req.body.checkIn,
        chgeckOut: req.body.chgeckOut
    });


    tranportationOne.save().
    then( trans_one =>{
        
        transportation_one_id = trans_one._id;
        
        tranportationTwo.save()
        .then( trans_two =>{
            
            transportation_two_id = trans_two._id;

            accomodation.save()
            .then( acc =>{

                var tourData = new TourData({
                    u_id: req.body.u_id,
                    t_id: req.body.t_id,
                    c_id: req.body.c_id,
                    treatment_Date: req.body.treatment_Date,
                    transportation_Departure_id: transportation_one_id,
                    transportation_Return_id: transportation_two_id,
                    accomodation_id: acc._id
                })

                tourData.save()
                .then( tour =>{
                    res.status(200).json({
                        transportation_One_Insertion: true,
                        transportation_Two_Insertion: true,
                        accomodation_Insertion: true,
                        tour_Data_Insertion: true
                    }) 
                })
                .catch( err =>{
                    console.log( err);
                    Transportation.findById(  transportation_one_id  )
                    .then( t1 => {
                        t1.remove()
                        .then( t1 => {
                            Transportation.findById( transportation_two_id )
                            .then(t2 => {
                                t2.remove()
                                .then(t2 =>{

                                    console.log( acc._id);
                                    Accomodation.findById( acc._id )
                                    .then( ac =>{

                                        ac.remove()
                                        .then( acc =>{
                                            res.status(200)
                                            .json({
                                                transportation_One_Insertion: true,
                                                transportation_Two_Insertion: true,
                                                accomodation_Insertion: true,
                                                tour_Data_Insertion: false,
                                                removed_New_Transportation_One_To_Perserve_Database  :true,
                                                removed_New_Transportation_Two_To_Perserve_Database  :true,
                                                removed_New_TAccomodation_To_Perserve_Database  :true
                                            })
                                        })
                                        .catch( err =>{
                                            res.status(404)
                                            .json({
                                                transportation_One_Insertion: true,
                                                transportation_Two_Insertion: true,
                                                accomodation_Insertion: true,
                                                tour_Data_Insertion: false,
                                                removed_New_Transportation_One_To_Perserve_Database  :true,
                                                removed_New_Transportation_Two_To_Perserve_Database  :true,
                                                removed_New_TAccomodation_To_Perserve_Database  :false
                                            })
                                        })

                                    })
                                    
                                })
                                .catch(err => {
                                    res.status(404)
                                    .json({
                                        transportation_One_Insertion: true,
                                        transportation_Two_Insertion: true,
                                        accomodation_Insertion: true,
                                        tour_Data_Insertion: false,
                                        removed_New_Transportation_One_To_Perserve_Database  :true,
                                        removed_New_Transportation_Two_To_Perserve_Database  :false,
                                        removed_New_TAccomodation_To_Perserve_Database  :false
                                    })
                                }) 
                            })
                        })
                        .catch(err => {
                            res.status(404)
                            .json({
                                transportation_One_Insertion: true,
                                transportation_Two_Insertion: true,
                                accomodation_Insertion: true,
                                tour_Data_Insertion: false,
                                removed_New_Transportation_One_To_Perserve_Database  :false,
                                removed_New_Transportation_Two_To_Perserve_Database  :false,
                                removed_New_TAccomodation_To_Perserve_Database  :false
                            })
                        })
                    })
                })              

            //=============
            })
            .catch( err => {
                Transportation.findById(  transportation_one_id  )
                .then( t1 => {
                    t1.remove()
                    .then( t1 => {
                        Transportation.findById( transportation_two_id )
                        .then( t2 => {
                            t2.remove().then( t2 =>{
                                res.status(200)
                                .json({
                                    transportation_One_Insertion: true,
                                    transportation_Two_Insertion: true,
                                    accomodation_Insertion: false,
                                    removed_New_Transportation_One_To_Perserve_Database  :true,
                                    removed_New_Transportation_Two_To_Perserve_Database  :true
                                })
                            })
                        })
                        .catch( err => {
                            res.status(404)
                            .json({
                                transportation_One_Insertion: true,
                                transportation_Two_Insertion: true,
                                accomodation_Insertion: false,
                                removed_New_Transportation_One_To_Perserve_Database  :true,
                                removed_New_Transportation_Two_To_Perserve_Database  :false
                            })
                        }) 

                    })
                    .catch(err => {
                        res.status(404)
                        .json({
                            transportation_One_Insertion: true,
                            transportation_Two_Insertion: true,
                            accomodation_Insertion: false,
                            removed_New_Transportation_One_To_Perserve_Database  :false,
                            removed_New_Transportation_Two_To_Perserve_Database  :false
                        })
                    })
                })
            })

        })
        .catch( err =>{

            Transportation.findById(  transportation_one_id  )
            .then( t1 => 
                t1.remove()
                .then( ()=> 
                    res.status(200)
                    .json({
                        transportation_One_Insertion: true,
                        transportation_Two_Insertion: false,
                        removed_New_Transportation_One_To_Perserve_Database  :true
                    })
                )
                .catch(err => {
                    res.status(404)
                    .json({
                        transportation_One_Insertion: true,
                        transportation_Two_Insertion: false,
                        removed_New_Transportation_One_To_Perserve_Database  : false
                    })
                })
            )
        })


    })
    .catch( err =>{ 
        res.status(400)
        .json({ 
            error: err,
            transportation_One_Insertion: false 
        })
    })



});



//==========================================================================================
//======================    END OF Post CALLS   ============================================
//==========================================================================================
//======================    PUT CALLS  =================( Done all)=========================
//==========================================================================================





//==========================================================================================
//======================    END OF PUT CALLS   =============================================
//==========================================================================================
//======================    DELTE CALLS  =========( Done all)===============================
//==========================================================================================





//==========================================================================================
//======================    END OF DELETE CALLS   ==========================================
//==========================================================================================


module.exports = router;