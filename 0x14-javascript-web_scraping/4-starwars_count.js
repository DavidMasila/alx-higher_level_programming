#!/usr/bin/node
// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const args = require('process').argv;
request(args[2], (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    let count = 0;
    const moviesData = JSON.parse(body).results;
    for (let i = 0; i <= moviesData.length; i++) {
      const characters = moviesData[i].characters;
      for (let j = 0; j <= characters.length; j++) {
        const char18 = characters[j].split('/');
        if (char18[char18.length - 2] === '18') {
          count++;
          break;
        }
      }
    }
    console.log(count);
  }
});
