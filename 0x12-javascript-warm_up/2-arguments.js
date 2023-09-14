#!/usr/bin/node
// A script that searches the second biggest integer in the list of arguments

const len = process.argv.length;

if (len < 3) {
  console.log('No argument');
} else if (len === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
