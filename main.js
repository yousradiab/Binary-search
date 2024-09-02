"use strict";
const numbers = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];
const ordliste = [
  "aarhus",
  "andedam",
  "andegård",
  "bondefanget",
  "bondegård",
  "børnearbejde",
  "gadefejer",
  "gær",
  "gødning",
  "gaardejer",
  "kalapøjser",
  "kalundborg",
  "kørt",
  "kårde",
  "ålborg",
];

function binarySearch(search, values, comfunc) {
  let min = 0;
  let max = values.length - 1;
  let found = false;

  while (!found && min <= max) {
    let middle = Math.floor((min + max) / 2);
    let c = comfunc(search, values[middle]);

    console.log(`min: ${min}, mid: ${middle}, max: ${max}, c: ${c}`);

    if (c === 0) {
      found = true;
      return values[middle];
    }
    if (c > 0) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
}

function stringcomparefunction(a, b) {
  return a.localeCompare(b);
}
console.log(binarySearch("gaardejer", ordliste, stringcomparefunction));

function compare(a, b) {
  return a - b;
}

console.log(binarySearch(28, numbers, compare));
