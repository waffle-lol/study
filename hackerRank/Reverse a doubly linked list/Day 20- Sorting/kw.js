//https://www.hackerrank.com/challenges/30-sorting

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
    a = readLine().split(' ');
    a = a.map(Number);

    const swap = ( i, j ) => {
        const _a = a[ i ];
        a[ i ] = a[ j ];
        a[ j ] = _a;
    };

    let numberOfSwaps = 0;

    for ( let i = 0; i < n; i++ ) {

        for ( let j = 0; j < n - 1; j++ ) {
            if ( a[ j ] > a[ j + 1 ] ) {
                swap( j, j + 1 );
                numberOfSwaps++;
            }
        }

        if ( numberOfSwaps === 0 ) break;
    }

    const firstElement = a[ 0 ];
    const lastElement = a[ n - 1 ];
    console.log( `Array is sorted in ${ numberOfSwaps } swaps.` );
    console.log( `First Element: ${ firstElement }` );
    console.log( `Last Element: ${ lastElement }` );

}
