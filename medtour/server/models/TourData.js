const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourDataSchema = new Schema({
    
    u_id:{
        type: Schema.Types.ObjectId,
        ref: "user_id",
        required: true
    },
    t_id:{
        type: Schema.Types.ObjectId,
        ref: "treatment_id",
        required: true
    },
    tr_id:{
        type: Schema.Types.ObjectId,
        ref: "transportation_id",
        required: true
    },
    a_id:{
        type: Schema.Types.ObjectId,
        ref: "accomodation_id",
        required: true
    },
    c_id:{
        type: Schema.Types.ObjectId,
        ref: "clinic_id",
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = TourData = mongoose.model('TourData', TourDataSchema);