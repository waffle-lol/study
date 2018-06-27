//https://www.hackerrank.com/challenges/time-conversion

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

function timeConversion(s) {
    // Complete this function
    const condition = s[ s.length - 2 ];
    if ( /p/i.test( condition ) ) s = s.replace( /^\d\d/, s.split( ':' )[ 0 ] * 1 + 12 ).replace( /^24/, '12' );
    else s = s.replace( /^12/, '00' );
    s = s.replace( )
    s = s.replace( /..$/, '' );
    return s;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
