const express = require('express');
const Transporter = require('../models/transportermodel');
const getToken = require('../utils');
const mongoose = require('mongoose');

const router = express.Router();

//get transporters from server or db
router.get("/", async (req, res) => {
    const transporters = await Transporter.find({});
    res.send(transporters)
});


router.get("/", async (req, res) => {
    const transporters = await Transporter.find({});
    res.send(transporters)
});


//to add transporters or create create
router.post("/create", async (req, res) =>{
    const transporter  = new Transporter({
 _id: mongoose.Types.ObjectId(),
name: req.body.name,
category: req.body.category,
idNumber: req.body.idNumber,
passImage: req.body.passImage,
idImageF: req.body.idImageF,
idImageB: req.body.idImageB,
autoImage: req.body.autoImage,
fullImage: req.body.fullImage,
city: req.body.city,
telephone: req.body.telephone,
location: req.body.location,
address: req.body.address,
availability: req.body.availability,
rating: req.body.rating,
    });
    const newTransporter =  await transporter.save();
    if (newTransporter) {
        return res.status(201).send({message: "New transporter created", data: newTransporter });
    }
    return res.status(500).send({message: "Error in creating transporter"});

// all of the script.... 
});
module.exports = router;