#!/usr/bin/node

// Dictionary of user id by occurrences
const dict = require('./101-data').dict;

// Dictionary of occurrences by user id
const newDict = {};

// Go through each occurrence in the dictionary.
Object.values(dict).forEach((occurrence) => {
  // Add a new entry if the occurrence's user ids is not filled in already
  if (Object.keys(newDict).indexOf(occurrence) === -1) {
    newDict[occurrence] = [];

    // Get all user ids that have matching occurrences
    const userIdsMatchingWithOccurrence = Object.entries(dict).filter(([key, value]) => {
      return occurrence === value;
    });

    // Add the matching ids to the newDict
    userIdsMatchingWithOccurrence.forEach(item => {
      newDict[occurrence].push(item[0]);
    });
  }
});
console.log(newDict);
