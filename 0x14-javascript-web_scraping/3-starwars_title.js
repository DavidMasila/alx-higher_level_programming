#!/usr/bin/node
// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
const process = require('process');
const request = require('request');

const endpoint = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(endpoint, (error, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
