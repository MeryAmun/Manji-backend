const express = require('express');
const data = require('../data');

const transRouter = express.Router();


transRouter.get('/transporters', (req, res) => {
    res.send(data.transporters)
});



module.exports = transRouter;