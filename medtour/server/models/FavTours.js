const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavToursSchema = new Schema({
    u_id:{
        type:Schema.Types.ObjectId,
        ref: "user_id",
        required: true
    },
    t_id:{
        type:Schema.Types.ObjectId,
        ref: "tour_id",
        required: true
    }
});

module.exports = FavTours = mongoose.model('FavTours', FavToursSchema);