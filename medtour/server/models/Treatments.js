const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreatmentsSchema = new Schema({
    
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
    treatmentDuration_Hours:{
        type: Number
    },
    treatmentDuration_Days_Start:{
        type:Number
    },
    treatmentDuration_Days_End:{
        type:Number
    },
    priceHigh:{
        type: Number,
        required: true
    },
    arrangedPrice:{
        type:Number,
        required: false
    },
    currency:{
        type: String,
        required: true
    }
});

module.exports = Treatments = mongoose.model('Treatments', TreatmentsSchema);