const express = require ('express');

const server = express();

server.get('/', (req,res)=>{
    return res.send('Server is up and running');
})

server.listen (3000, (req,res)=>{
    console.log('Express Server is Up and Running');
})