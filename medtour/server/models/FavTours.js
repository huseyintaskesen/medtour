const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavToursSchema = new Schema({
    u_id:{
        type:String,
        required: true
    },
    t_id:{
        type:String,
        required: true
    }
});

module.exports = FavTours = mongoose.model('FavTours', FavToursSchema);