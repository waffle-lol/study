//https://www.hackerrank.com/challenges/find-point

function processData(input) {
    const _input = input.split( /\n/ );
    for ( let i = 1, length = _input.length; i < length; i++ ) {
        const _val = _input[ i ].split( /\s/ ).map( Number );
        console.log( _val[ 2 ] * 2 - _val[ 0 ], _val[ 3 ] * 2 - _val[ 1 ] );
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
