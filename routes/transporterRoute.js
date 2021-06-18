const express = require('express');
const transporter = require('../models/transportermodel');
const getToken = require('../utils')

const router = express.Router();

//get transporters from server or db
router.get("/", async (req, res) => {
    const transporters = await transporter.find({});
    res.send(transporters)
});


router.get("/", async (req, res) => {
    const transporters = await transporter.find({});
    res.send(transporters)
});


//to add transporters or create create
router.post("/", async (req, res) =>{
    const transporter = new Transporter({
name: req.body.name,
category: req.body.category,
image: req.body.image,
city: req.body.city,
telephone: req.body.telephone,
location: req.body.location,
rating: req.body.rating,
    });
});
const newTransporter = await transporter.save();
    if (newTransporter) {
        return res.status(201).send({message: "New transporter created", data:newTransporter });
    }
    return res.status(500).send({message: "Error in creating transporter"})

    // all of the script.... 




module.exports = router;