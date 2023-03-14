#!/usr/bin/node

const fs = require('fs');
const argv = require('process').argv;

// Write to the file in the 3rd argument, the contents of the files specified
// by first and second argument

fs.readFile(argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  fs.writeFile(argv[4], data, function (err) {
    if (err) throw err;
  });
});

fs.readFile(argv[3], 'utf8', function (err, data) {
  if (err) throw err;
  fs.appendFile(argv[4], data, function (err) {
    if (err) throw err;
  });
});
