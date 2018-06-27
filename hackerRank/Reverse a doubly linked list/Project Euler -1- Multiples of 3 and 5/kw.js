//https://www.hackerrank.com/contests/projecteuler/challenges/euler001

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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        let three = 3;
        let five = 5;
        let fifteen = 15;
        let sum = 0;
        while ( three < n ) {
            sum += three;
            three += 3;
        }
        while ( five < n ) {
            if ( five % fifteen !== 0 ) sum += five;
            five += 5;
        }
        console.log( sum );
    }

}
