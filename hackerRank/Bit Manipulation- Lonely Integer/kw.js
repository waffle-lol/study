//https://www.hackerrank.com/challenges/ctci-lonely-integer

'use strict';

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



function main() {
  const n = parseInt(readLine(), 10);

  const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
  const b = a.reduce((p, c) => p ^ c, 0)
  console.log(b);
}
