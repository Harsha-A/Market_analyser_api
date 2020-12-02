// const express = require('express')
// const app = express();
const app = require('./app')
const port = process.env.port || 3000
const server = app.listen(port,(err)=>{
    if(err) throw err;
    const {address, port} = server.address();
    console.log(`Server is listening at ${address}:${port}...`)
})
module.exports = app;