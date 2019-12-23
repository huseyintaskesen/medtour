
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Treatment = require('../models/Treatments');
const Rating = require('../models/Ratings');
const PhoneNumber = require('../models/PhoneNumbers');
const Doctor = require("../models/Doctors");

//CreateSchema

const ClinicsFromDb = new Schema({

    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: ""
    },
    address: {
      type: String,
      required: false,
      default: ""
    },
    ratingAverage: {
      type: Number,
      required: false,
      default: 0
    },
    email: {
        type: String,
        required: true
    },
    password:{
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: false,
      default: ""
    },
    treatments:[{
      type: Schema.Types.ObjectId,
      ref:  Treatment
    }],
    reviews:[{
      type: Schema.Types.ObjectId,
      ref: Rating
    }],
    phoneNumbers:[{
      type: Schema.Types.ObjectId,
      ref: PhoneNumber
    }],
    doctors:[{
      type: Schema.Types.ObjectId,
      ref: Doctor
    }]
});

module.exports = Clinic = mongoose.model('Clinics', ClinicsFromDb);