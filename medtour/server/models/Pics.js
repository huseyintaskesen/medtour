const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PicsSchema = new Schema({

    fk_id:{
        type:Schema.Types.ObjectId,
        ref: "doctor_id/clinic_id",
        required: true
    },
    pic:{
        type:String,
        required:true
    }

});

module.exports = Pics = mongoose.model('Pics', PicsSchema);