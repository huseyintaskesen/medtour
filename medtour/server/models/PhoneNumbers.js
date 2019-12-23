const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneNumbersSchema = new Schema({

    phoneType:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
});

module.exports = PhoneNumbers = mongoose.model('PhoneNumbers', PhoneNumbersSchema);