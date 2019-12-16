const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourDataSchema = new Schema({
    
    u_id:{
        type: String,
        required: true
    },
    t_id:{
        type: String,
        required: true
    },
    tr_id:{
        type: String,
        required: true
    },
    a_id:{
        type: String,
        required: true
    },
    c_id:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = TourData = mongoose.model('TourData', TourDataSchema);