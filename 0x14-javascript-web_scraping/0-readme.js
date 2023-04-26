#!/usr/bin/node

require('fs').readFile(process.argv[2], 'utf-8', (e, r) => {
  if (e) console.log(e);
  else console.log(r);
});
