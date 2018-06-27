//https://www.hackerrank.com/challenges/plus-minus

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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let p = 0;
    let m = 0;
    let z = 0;
    for ( let i = 0; i < n; i++ ) {
        const item = arr[ i ];
        if ( item > 0 ) {
            p++;
        } else if ( item < 0 ) {
            m++;
        } else {
            z++;
        }
    }
    p /= n;
    m /= n;
    z /= n;
    console.log( p.toFixed( 4 ) );
    console.log( m.toFixed( 4 ) );
    console.log( z.toFixed( 4 ) );
}
