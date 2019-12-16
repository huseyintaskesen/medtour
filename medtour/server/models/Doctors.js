const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({

    name:{
        type: String,
        required:true
    },
    surname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    jobName:{
        type: String,
        required:true
    },
    specializations:{
        type: String,
        required:true
    },
    languages:{
        type: String,
        required:true
    },
    bio:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    }

});

module.exports = Doctor = mongoose.model('Doctors', DoctorSchema);