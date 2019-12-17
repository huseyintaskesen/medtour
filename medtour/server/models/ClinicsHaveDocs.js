const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClinicsHaveDocsSchema = new Schema({
    c_id:{
        type: Schema.Types.ObjectId,
        ref: "clinic_id",
        required: true
    },
    d_id:{
        type: Schema.Types.ObjectId,
        ref: "doctor_id",
        required: true
    }
});

module.exports = ClinicsHaveDocs = mongoose.model('ClinicsHaveDocs', ClinicsHaveDocsSchema);