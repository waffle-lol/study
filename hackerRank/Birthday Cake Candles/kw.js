//https://www.hackerrank.com/challenges/birthday-cake-candles

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

function birthdayCakeCandles(n, ar) {
    // Complete this function
    let count = 0;
    let tallest = 0;
    for ( let i = 0, length = ar.length; i < length; i++ ) {
        const cho = ar[ i ];
        if ( cho > tallest ) {
            count = 1;
            tallest = cho;
        } else if ( cho === tallest ) {
            count++;
        }
    }
    return count;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}
