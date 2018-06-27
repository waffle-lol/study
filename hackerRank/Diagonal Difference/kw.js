//https://www.hackerrank.com/challenges/diagonal-difference

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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    let _a = 0;
    let _b = 0;
    for ( let i = 0, length = a.length; i < length; i++ ) {
        _a += a[ i ][ i ];
        _b += a[ length - 1 - i ][ i ];
    }
    console.log( Math.abs( _a - _b ) );
}
