const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumesSchema = new Schema({

    fk_id:{
        type: String,
        required: true
    },
    resume:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = Resumes  = mongoose.model('Resumes', ResumesSchema);