
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//CreateSchema

const ClinicsFromDb = new Schema({

    name: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
      required: false,
    },
    email: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    }
});

module.exports = Clinic = mongoose.model('Clinics', ClinicsFromDb);