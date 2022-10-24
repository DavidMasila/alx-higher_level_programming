#!/usr/bin/node
// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const args = require('process').argv;

const charID = 18;

request(args[2], (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    let count = 0;
    const moviesData = JSON.parse(body);
    for (i = 0; i <= moviesData.length; i++) {
      if (moviesData.results.episode_id === charID) {
        count += 1;
      }
    }
    console.log(count);
  }
});
