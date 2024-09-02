"use strict";
const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function binarySearch(search, values) {
  let min = 0;
  let max = values.length - 1;
  let found = false;

  while (!found && min <= max) {
    let middle = Math.floor((min + max) / 2);
    let c = compare(search, values[middle]);

    console.log(`min: ${min}, mid: ${middle}, max: ${max}, c: ${c}`);

    if (c === 0) {
      found = true;
      return middle;
    }
    if (c > 0) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
}

function compare(a, b) {
  return a - b;
}

let index = binarySearch(28, values);
console.log(`Fundet på index: ${index}`);
