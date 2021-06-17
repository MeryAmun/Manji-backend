const express = require('express');
const data = require('./data');
const config = require('./config');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const transRouter = require('./routes/transporterRoute')
const bodyParser = require('body-parser');

dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
    if(req.method === 'OPTIONS') {
        res.end();
    }
    else {
        next();
    }
});

app.use("/api/users", userRoute);
app.use('/api', transRouter);
app.get('/api/transporters/:id', (req, res) => {
    const transporterId = req.params.id;
    const transporter = data.transporters.find(x => x._id === transporterId);
    if (transporter)
    res.send(transporter);
    else
    res.status(404).send({msg:'transporter Not Found.'})
});


const dbURI = 'mongodb+srv://nawe:nawe1234@transport.jlugw.mongodb.net/transport?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then((result) =>  app.listen(3500))
.catch((err) => console.log(err));

