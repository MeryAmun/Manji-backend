const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const transporterSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true, dropDups: true},
    image: {type: String, required: true},
    city: {type: String, required: true},
    telephone: {type: Number, required: true},
    location: {type: String, required: true},
    rating: {type: Number, default:0, required: true},
    
});
const transporterModel = mongoose.model("Transporter", transporterSchema);
module.exports = transporterModel;