//import getDB from "../server"
//import * as serv from '../server'

const databaseInstance = require("../server")

const CONSTANTS = require("../constants");
const express = require("express");
const sampleData = require("../sampleData");
const router = express.Router();
// Grid Page Endpoint
router.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
  res.json(sampleData.textAssets);
});

// MasterDetail Page Endpoint
router.get(CONSTANTS.ENDPOINT.MASTERDETAIL, (req, res) => {
  res.json(sampleData.textAssets);
});

router.get('/clinic/?:location',(req, res) => {
//   var db = req.db
//   var collection = db.get('Clinic')
//  var clinics =  collection.find({location: req.params.location}).toArray((err, items) => {
//     console.log(items)
//   })
//   res.json(clinics);
  var location = req.params.location

  console.log(databaseInstance.db)
  //getClinicByLocation(location)
  res.json(location)
})


module.exports = router;
