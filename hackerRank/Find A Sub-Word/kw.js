//https://www.hackerrank.com/challenges/find-substring

function processData(input) {
    //Enter your code here
    const _input = input.split( '\n' );
    const lineLimit = _input[ 0 ] * 1 + 1;
    const lines = [];
    for ( let i = 1; i < lineLimit; i++ ) lines.push( _input[ i ] );
    for ( let i = lineLimit + 1, length = _input.length; i < length; i++ ) {
        const query = _input[ i ];
        const words = '[a-zA-Z0-9\_]';
        const regex = new RegExp( '(' + words + query + words + ')', 'g' );
        let matchCnt = 0;
        lines.forEach( _line => {
            const matches = regex[ Symbol.match ]( _line );
            matchCnt += matches? matches.length : 0
        } );
        console.log( matchCnt );
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
