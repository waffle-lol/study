//https://www.hackerrank.com/challenges/detect-html-tags

function processData(input) {
    //Enter your code here
    const _input = input.split( '\n' );
    const count = _input.shift();
    const result = {};
    for ( let i = 0; i < count; i++ ) {
        const line = /<\s*[^\s\/>]+/g[ Symbol.match ]( _input[ i ] ) || [];
        const _tags = line.map( _ => _.replace( /^<\s*/, '' ) );
        for ( let j = 0, length = _tags.length; j < length; j++ ) result[ _tags[ j ] ] = 0
    }
    const keys = Object.keys( result ).sort( ( a, b ) => a > b );
    console.log( keys.join( ';' ) );
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
