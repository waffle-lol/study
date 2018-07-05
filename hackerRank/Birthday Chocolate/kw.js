// https://www.hackerrank.com/challenges/the-birthday-bar

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

// Complete the solve function below.
function solve(s, d, m) {
    if (m > s) return 0;
    let cnt = 0;
    const length = s.length - m + 1;
    for (let i = 0; i < length; i++) {
        const segmentSum = s.slice(i, i + m).reduce((p, c) => p + c, 0);
        if (segmentSum === d) cnt += 1;
    }
    return cnt;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = solve(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
