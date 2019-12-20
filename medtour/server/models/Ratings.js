const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({
    
    u_id:{
        type:Schema.Types.ObjectId,
        ref: "user_id",
        required: true
    },
    c_id:{
        type:Schema.Types.ObjectId,
        ref: "clinics_id",
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    rating:{
        type:Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = Ratings = mongoose.model('Ratings', RatingsSchema);