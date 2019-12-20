
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//CreateSchema

const ClinicsFromDb = new Schema({

    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: ""
    },
    address: {
      type: String,
      required: false,
      default: ""
    },
    ratingAverage: {
      type: Number,
      required: false,
      default: 0
    },
    email: {
        type: String,
        required: true
    },
    password:{
      type: String,
      required: true
    },
    bio: {
        type: String,
        required: false,
        default: ""
    },
    treatments:[
        {
          name:{
            type: String,
            required: true
        },
        info:{
            type: String,
            required: true
        },
        priceLow:{
            type: Number,
            required: true
        },
        priceHigh:{
            type: Number,
            required: true
        },
        currency:{
            type: String,
            required: true
        }
      }
    ],
    reviews:[
      {
        u_id:{
          type:Schema.Types.ObjectId,
          ref: "user_id",
          required: true
        },
        name:{
          type: String,
          required: true
        },
        comment:{
            type: String,
            required: true
        },
        rating:{
            type:Number,
            required: true
        },
        date:{
            type: Date,
            required: true,
            default: Date.now
        }
      }
    ]
});

module.exports = Clinic = mongoose.model('Clinics', ClinicsFromDb);