const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreatmentsSchema = new Schema({
    
    c_id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    priceLow:{
        type: Number,
        required: true
    },
    priceHigh:{
        type: Number,
        required: true
    },
    currency:{
        type: String,
        required: true
    }
});

module.exports = Treatments = mongoose.model('Treatments', TreatmentsSchema);