#!/usr/bin/node

const list = require('./100-data').list;

console.log(list);
// Multiply each value in the list by its index
console.log(list.map((item, i) => { return item * i; }));
