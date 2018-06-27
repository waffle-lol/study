//https://www.hackerrank.com/challenges/sparse-arrays

function processData(input) {
    const _input = input.split( '\n' );
    const length = _input.length;
    const inputLength = _input[ 0 ] * 1 + 1;
    const inputArr = [];
    for ( let i = 1; i < inputLength; i++ ) inputArr.push( _input[ i ] );
    for ( let i = inputLength + 1; i < length; i++ ) {
        const query = _input[ i ];
        let count = 0;
        inputArr.forEach( _ => { if ( query === _ ) count++ } );
        console.log( count );
    };
    
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
