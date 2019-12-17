const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchedulesSchema = new Schema({
    
    fk_id:{
        type: Schema.Types.ObjectId,
        ref: "clinic_id",
        required: true
    },
    monday:{
        type: String,
        required: true
    },
    tuesday:{
        type: String,
        required: true
    },
    wednesday:{
        type: String,
        required: true
    },
    thursday:{
        type: String,
        required: true
    },
    friday:{
        type: String,
        required: true
    },
    saturday:{
        type: String,
        required: true
    },
    sunday:{
        type: String,
        required: true
    },
    holiday:{
        type: String,
        required: true
    },
    specialDays:{
        type: String,
        required: true
    }
});

module.exports = Schedules = mongoose.model('Schedules', SchedulesSchema);