const express = require('express');
const config = require('./config');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');

dotenv.config();


const app = express();

app.use("/api/users", userRoute);
app.use(bodyParser.json())

const dbURI = 'mongodb+srv://nawe:nawe1234@transport.jlugw.mongodb.net/transport?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then((result) =>  app.listen(3500))
.catch((err) => console.log(err));

