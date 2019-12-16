
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyScheduleSchema = new Schema({
    fk_id:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    startTime:{
        type: Date,
        required: true
    },
    endTime:{
        type: Date,
        required: true
    }
});

module.exports = DailySchedule = mongoose.model('DailySchedule', DailyScheduleSchema);