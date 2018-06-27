//https://www.hackerrank.com/challenges/mini-max-sum

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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let sum = arr.reduce( ( p, c ) => p + c, 0 );
    let min = sum;
    let max = 0;
    for ( let i = 0, length = arr.length; i < length; i++ ) {
        const _sum = sum - arr[ i ];
        if ( max < _sum ) max = _sum;
        if ( min > _sum ) min = _sum;        
    }
    console.log( min, max );

}
