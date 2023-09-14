#!/usr/bin/node
// A function

exports.addMeMaybe = function (number, theFunction) {
  theFunction(number + 1);
};
