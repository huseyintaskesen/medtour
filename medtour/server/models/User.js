const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneNumber = require("../models/PhoneNumbers");


const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    chatId:{
        type: String,
        default: '0'
    },
    userType:{
        type: Number,
        default: 1
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    authenticated:{
        type: Boolean,
        default: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    register_date:{
        type: Date,
        default: Date.now
    },
    phoneNumbers:[{
          type: Schema.Types.ObjectId,
          ref: PhoneNumber
    }]
    
});

module.exports = User = mongoose.model('User', UserSchema);