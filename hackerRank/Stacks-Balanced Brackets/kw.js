//https://www.hackerrank.com/challenges/ctci-balanced-brackets

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
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const expression = readLine();
    const container = [];
    const closer = {')': '(', ']': '[', '}': '{'};
    let i = 0;
    let flag = true;
    while (i < expression.length && flag) {
      const character = expression[i];
      if (closer[character]) {
        const lastCharacter = container[container.length -1];
        if (closer[character] === lastCharacter) {
          container.pop();
        } else {
          flag = false;
        }
      } else {
        container.push(character);
      }
      i += 1;
    }
    if (!flag || container.length) console.log('NO');
    else console.log('YES');
  }
}
