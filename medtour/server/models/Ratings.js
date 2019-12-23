const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require("../models/User");

const RatingsSchema = new Schema({
    
    u_id:{
        type:Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    name:{
        type: String,
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