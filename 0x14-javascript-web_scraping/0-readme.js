#!/usr/bin/node 
const fs = require('fs')
const process = require('process')

fs.readFile(process[argv[1]], 'utf-8', (err, data) =>{
    if (err) throw err;
    else{
        console.log(data);
    }
        
})