const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneNumbersSchema = new Schema({

    fk_id:{
        type:Schema.Types.ObjectId,
        ref: "doctors_id/clinics_id/user_id",
        required:true
    },
    phoneType:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    }
});

module.exports = PhoneNumbers = mongoose.model('PhoneNumbers', PhoneNumbersSchema);