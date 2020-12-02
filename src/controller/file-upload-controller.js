const express = require('express')
const router = require('express').Router();
const path = require('path')
const fs= require('fs')
const fileuploadservice = require('../service/file-upload-service')
const _dirname = path.resolve();
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786 
// env path variable


    router.get('/fileupload',async(req,res)=>{
    try{

        console.log('File Upload Controller: fileupload Begin')             
        filename = ['NIFTY50.csv','BANKNIFTY.csv']
        var uploadresult = await fileuploadservice.uploadAllfiles(filename);
        res.send(uploadresult);
        console.log('File Upload Controller: fileupload End')    
                
    }
    catch(error){
    console.log('File Upload Controller: fileuplaod catch error'+error)
    }
})
    module.exports = router

