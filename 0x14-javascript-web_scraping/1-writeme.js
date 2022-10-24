#!/usr/bin/node
// script that writes to a string 
const fs = requires('fs')
const process = requires('process')

fs.writeFile(process.argv[2], process.argv[3], 'utf-8', (err) => {
    if (err) throw err;
});