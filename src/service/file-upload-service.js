const express = require('express')
const app = express();
const router = express.Router();
const csv = require("csvtojson");

const fs= require('fs')
const path = require('path')
// const uploadfilepath = path.resolve(__dirname,'../../input')
const uploadfilepath = (path.join(__dirname, '../../input')).replace(/\\/g, '/')+'/'


const uploadAllfiles = async(fileArray)=>{
    console.log('File Upload Service: uploadAllfiles Begin')
    await fileprocessing(fileArray);

console.log('File Upload Service: uploadAllfiles End')
}

const fileprocessing = async(fileArray)=>{
    console.log('File Upload Service: fileprocessing Begin')
    let f1,f2;
    for(let i in fileArray){
        console.log('File Name: '+ fileArray[i])
        switch(fileArray[i]){
            case 'NIFTY50.csv': f1 = await readNifty(fileArray[i])
            break;
            case 'BANKNIFTY.csv': f2 = await readBankNifty(fileArray[i])
            break;
            default:{
                return 'Invalid File..! Upload a valid file.'
            }
        }
    }
    console.log('File Upload Service: fileprocessing End')
}

const readNifty = async(filename)=>{
  
    console.log('File Upload Service: readNifty Begin',filename)
    
    try {        
        console.log(uploadfilepath+filename)        
       let csvFilePath = uploadfilepath+filename;   
        const jsonArray=await csv().fromFile(csvFilePath);
        console.log(jsonArray);
        return jsonArray;
    } catch (error) {
        console.log('readNifty: catch',error)
    }

    console.log('File Upload Service: readNifty End')
}

const readBankNifty = async(filename)=>{
    console.log('File Upload Service: readBankNifty Begin',filename)
    try {
        let csvFilePath = uploadfilepath+filename;
        const jsonArray=await csv().fromFile(csvFilePath);
        console.log(jsonArray);
        return jsonArray;
    } catch (error) {
        console.log('readBankNifty: catch',error)
    }
    console.log('File Upload Service: readBankNifty End')
}

module.exports={
    uploadAllfiles,
    fileprocessing,
    readNifty
}