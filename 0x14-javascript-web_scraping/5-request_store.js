#!/usr/bin/node
// Write a script that gets the contents of a webpage and stores it in a file.
const args = require('process').argv;
const fs = require('fs');
const request = require('request');

request(args[2], (body, error) => {
  if (error) {
    console.log(error);
  } else {
    const content = body;
    fs.writeFile(args[2], content, 'utf-8', (err) => {
      if (err) throw err;
    });
  }
});
