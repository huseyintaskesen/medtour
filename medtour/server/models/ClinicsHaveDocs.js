const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClinicsHaveDocsSchema = new Schema({
    c_id:{
        type: String,
        required: true
    },
    d_id:{
        type: String,
        required: true
    }
});

module.exports = ClinicsHaveDocs = mongoose.model('ClinicsHaveDocs', ClinicsHaveDocsSchema);