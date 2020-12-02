const express = require('express');
const router = require('express').Router();

const app = express();
const fileupload = require('./src/controller/file-upload-controller')

app.get('/',(req,res,next)=>{
    console.log('/')
    res.send('Hi')
    // next()
})
//Handling filupload routes
app.use('/upload',fileupload);
module.exports = app

