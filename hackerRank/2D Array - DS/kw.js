//https://www.hackerrank.com/challenges/2d-array

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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    const hgSize = 3;
    const hgContainer = [];
    const length = arr.length - hgSize + 1;

    for ( let i = 0; i < length; i++ ) {
        const x0 = i;
        const x1 = i + 1;
        const x2 = i + 2;
        for ( let j = 0; j < length; j++ ) {
            const y0 = arr[ j ];
            const y1 = arr[ j + 1 ];
            const y2 = arr[ j + 2 ];
            hgContainer.push( y0[ x0 ] + y0[ x1 ] + y0[ x2 ] + y1[ x1 ] + y2[ x0 ] + y2[ x1 ] + y2[ x2 ] );
        }
    }
    console.log( Math.max( ...hgContainer ) );

}
