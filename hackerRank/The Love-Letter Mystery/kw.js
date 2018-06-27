//https://www.hackerrank.com/challenges/the-love-letter-mystery

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

function theLoveLetterMystery(s){
    // Complete this function
    const list = 'abcdefghijklmnopqrstuvwxyz';
    const size = s.length;
    const length = Math.floor( size / 2 );
    let move = 0;
    for ( let i = 0; i < length; i++ ) {
        const f = s[ i ];
        const l = s[ size - 1 - i ];
        if ( f !== l ) {
            const indexF = list.indexOf( f );
            const indexL = list.indexOf( l );
            move += Math.abs( indexF - indexL );
        }
    }
    return move;
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var result = theLoveLetterMystery(s);
        process.stdout.write("" + result + "\n");
    }

}
