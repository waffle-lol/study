//https://www.hackerrank.com/challenges/dynamic-array

function processData(input) {
    //Enter your code here
    let lastAnswer = 0;
    const lines = input.split( '\n' );
    const firstLine = lines.shift().split( ' ' );
    const arrLength = firstLine[ 0 ];
    const queryLength = firstLine[ 1 ];
    const arr = [];
    for ( let i = 0; i < arrLength; i++ ) arr.push( [] );
    for ( let i = 0; i < queryLength; i++ ) {
        const query = lines[ i ].split( ' ' );
        const queryType = query[ 0 ];
        const x = query[ 1 ];
        const y = query[ 2 ];
        const index = ( x ^ lastAnswer ) % arrLength;
        const _arr = arr[ index ];
        if ( queryType === '1' ) {
            _arr.push( y );
        } else if ( queryType === '2' ) {
            const i = y % _arr.length;
            lastAnswer = _arr[ i ];
            console.log( lastAnswer );
        }
    }

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
