const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingsSchema = new Schema({
    
    u_id:{
        type:String,
        required: true
    },
    c_id:{
        type:String,
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