#!/usr/bin/node

// Returns a function that converts a number to base @base
exports.converter = function (base) {
  return function (number) {
    return number.toString(base);
  };
};
