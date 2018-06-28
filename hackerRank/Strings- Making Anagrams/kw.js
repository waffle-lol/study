//https://www.hackerrank.com/challenges/ctci-making-anagrams

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  const container = {};
  const aLength = a.length;
  const bLength = b.length;
  let minDelCount = aLength;

  for (let i = 0; i < aLength; i++) {
    const character = a[i];
    if (container[character]) container[character] += 1;
    else container[character] = 1;
  }

  for (let i = 0; i < bLength; i++) {
    const character = b[i];
    if (container[character]) {
      container[character] -= 1;
      minDelCount -= 1;
    } else {
      minDelCount += 1;
    }
  }

  return minDelCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
