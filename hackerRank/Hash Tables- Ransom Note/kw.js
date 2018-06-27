//https://www.hackerrank.com/challenges/ctci-ransom-note

'use strict';

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  const indices = {};
  const magazineLength = magazine.length;
  for (let i = 0; i < magazineLength; i++) {
    const word = magazine[i];
    if (indices[word]) indices[word] += 1;
    else indices[word] = 1;
  }
  const noteLength = note.length;
  for (let i = 0; i < noteLength; i++) {
    const word = note[i];
    if (indices[word]) indices[word] -= 1;
    else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
