'use strict';

function fishbash(numarray) {
  let array = [];
  for (let i = 0; i < numarray.length; i++) {
    if (numarray[i] % 15 == 0) {
      array.push('fish bash');
    } else if (numarray[i] % 3 == 0) {
      array.push('fish');
    } else if (numarray[i] % 5 == 0) {
      array.push('bash');
    } else {
      array.push(numarray[i]);
    }
  }
  console.log(array);
  return array;
}

module.exports = fishbash;


