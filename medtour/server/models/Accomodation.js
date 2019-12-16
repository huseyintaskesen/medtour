
const mongoos = require('mongoose');

const Schema = mongoose.Schema;

const AccomodationSchema = new Schema({

    name:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        require: true
    },
    price:{
        type: Number,
        required: true,
    },
    currency:{
        type: String,
        required: true,
    }


});

module.exports = Accomodation = mongoose.model('Accomodation', AccomodationSchema);