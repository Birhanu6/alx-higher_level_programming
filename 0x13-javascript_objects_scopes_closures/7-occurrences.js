#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  return (list.filter((item) => searchElement === item)).length;
};
