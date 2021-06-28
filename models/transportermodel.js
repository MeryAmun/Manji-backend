const mongoose = require('mongoose');



const transporterSchema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String, dropDups: true
    },
    idNumber: {
        type: Number,  unique: true,
    },
    passImage: {
        type: String,  unique: true,
    },
    idImageF: {
        type: String,  unique: true,
    },
    idImageB: {
        type: String, unique: true,
    },
    autoImage: {type: String,  unique: true,
    },
    fullImage: {
        type: String,  unique: true,
    },
    city: {
        type: String
    },
    telephone: {
        type: Number,  unique: true,
    },
    location: {
        type: String
    },
    address: {
        type: String
    },
    availability: {
        type: Boolean, default:false
    },
    rating: {type: Number, default:0},
    
});
const transporterModel = mongoose.model("Transporter", transporterSchema);

module.exports = transporterModel;