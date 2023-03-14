#!/usr/bin/node

// Returns the reversed version of list
exports.esrever = function (list) {
  const reversedList = [];
  list.forEach((item) => { reversedList.unshift(item); });
  return reversedList;
};
