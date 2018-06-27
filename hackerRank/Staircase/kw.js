//https://www.hackerrank.com/challenges/staircase

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
    var n = parseInt(readLine());
    for ( let i = 0; i < n; i++ ) {
        let space = '';
        let hash = ''
        for ( let k = n - i - 1; k > 0; k-- ) space += ' ';
        for ( let j = i + 1; j > 0; j-- ) hash += '#';
        console.log( space + hash );
    }
}
