const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const url = 'mongodb://localhost:27017/capstone_prac';

mongoose.connect(url, {})
    .then(result => console.log('Connected to Database... '))
    .catch(error => console.log(error.message));

app.listen(3000, () => {
    console.log('Connected to Port 3000... ');
});