//https://www.hackerrank.com/challenges/two-characters

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

function maxLen(n, s){
  const set = new Set(Array.from(s));
  const _arr = [...set];

  if (set.size <= 2) return set.size < 2 ? 0 : set.size;

  let _max = 0;
  const length = _arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const regex = new RegExp(`[^${_arr[i] + _arr[j]}]`, 'g');
      const _s = s.replace(regex, '');
      const tempLength = _s.length;
      if (!/(.)\1+/g.test(_s)) _max = tempLength > _max ? tempLength : _max;
    }
  }
  return _max;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = maxLen(n, s);
    process.stdout.write(""+result+"\n");
}
