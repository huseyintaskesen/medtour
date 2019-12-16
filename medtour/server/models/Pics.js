const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PicsSchema = new Schema({

    fk_id:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true
    }

});

module.exports = Pics = mongoose.model('Pics', PicsSchema);