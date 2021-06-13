const express = require('express');
const mongoose = require('mongoose')


const app = express();

const dbURI = 'mongodb+srv://nawe:nawe1234@transport.jlugw.mongodb.net/transport?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true }, { useUnifiedTopology: true })
.then((result) =>  app.listen(3500))
.catch((err) => console.log(err));

