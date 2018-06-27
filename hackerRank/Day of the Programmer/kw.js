//https://www.hackerrank.com/challenges/day-of-the-programmer

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(year) {
  // 31, 28, 31, 30, 31, 30, 31, 31
  let dateToAutust = 243;
  let isLeapYear = false;
  if (year < 1918) {
    // is Julian
    if (year % 4 === 0) isLeapYear = true;
  } else if (year === 1918) {
    // changing year
    return '26.09.1918';
  } else {
    if (year % 4 === 0) {
      if (year % 400 === 0 || year % 100 !== 0) isLeapYear = true;
    }
  }
  const day = isLeapYear ? 12 : 13;
  return `${day}.09.${year}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine(), 10);

    let result = solve(year);

    ws.write(result + "\n");

    ws.end();
}
