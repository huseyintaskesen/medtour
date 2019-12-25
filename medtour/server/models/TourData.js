const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require("../models/User");
const Treatment = require("../models/Treatments");
const Transportation = require("../models/Transportation");
const Accomodation = require("../models/Accomodation");
const Clinic = require("../models/Clinics");

const TourDataSchema = new Schema({
    
    u_id:{
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    t_id:{
        type: Schema.Types.ObjectId,
        ref: Treatment,
        required: true
    },
    c_id:{
        type: Schema.Types.ObjectId,
        ref: Clinic,
        required: true
    },
    treatment_Date:{
        type: Date,
        required: true
    },
    transportation_Departure_id:{
        type: Schema.Types.ObjectId,
        ref: Transportation,
        required: true
    }, 
    transportation_Return_id:{
        type: Schema.Types.ObjectId,
        ref: Transportation,
        required: true
    },  
    accomodation_id:{
        type: Schema.Types.ObjectId,
        ref: Accomodation,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
        required: false
    }
});

module.exports = TourData = mongoose.model('TourData', TourDataSchema);