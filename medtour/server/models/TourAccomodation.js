const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourAccomodationsSchema = new Schema({
    
    u_id:{
        type: String,
        required:true
    },
    a_id:{
        type: String,
        required:true
    },
    checkIn:{
        type: Date,
        required:true
    },
    checkOut:{
        type: Date,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    currency:{
        type: String,
        required:true
    }
});

module.exports = TourAccomodations = mongoose.model('TourAccomodations', TourAccomodationsSchema);