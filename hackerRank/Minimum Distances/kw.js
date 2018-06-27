//https://www.hackerrank.com/challenges/minimum-distances

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

// Complete the minimumDistances function below.
function minimumDistances(a) {
  const container = {};
  let minDistance = Infinity;
  a.forEach((item, i) => {
    const val = container[item];
    if (val !== undefined) {
      const distance = i - val;
      if (distance < minDistance) minDistance = distance;
    } else {
      container[item] = i;
    }
  });
  return minDistance === Infinity ? -1 : minDistance;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
