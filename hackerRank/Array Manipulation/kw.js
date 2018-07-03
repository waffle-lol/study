//https://www.hackerrank.com/challenges/crush

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  const [arrLength, operations] = readLine().split(' ').map(Number);

  const container = {};
  let max = -Infinity;
  let val = 0;

  for (let a0 = 0; a0 < operations; a0++){
    const [a, b, k] = readLine().split(' ').map(Number);
    if (container[a]) {
      container[a] += k;
    } else {
      container[a] = k;
    }
    if (container[b + 1]) {
      container[b + 1] -= k;      
    } else {
      container[b + 1] = -k;
    }
  }
  Object.keys(container).forEach(key => {
    val += container[key];
    if (val > max) max = val;
  })
  console.log(max);
}

