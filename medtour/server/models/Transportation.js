const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransportationSchema = new Schema({

    departure:{
        type: Date,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    currency:{
        type: String,
        required: true
    }

});

module.exports = Transportation = mongoose.model('Transportation', TransportationSchema);