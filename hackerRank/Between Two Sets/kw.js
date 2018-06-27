//https://www.hackerrank.com/challenges/between-two-sets

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

function getTotalX( a, b ) {

    const sort = ( a, b ) => a < b? -1 : 1;
    const A = a.sort( sort );
    const B = b.sort( sort );
    const tester = B[ 0 ];

    const getGcd = ( a, b ) => {
        const mod = a % b;
        return mod? getGcd( b, mod ) : b;
    }

    // const gcdA = A.reduce( ( p, c ) => getGcd, A[ 0 ] );
    const gcdB = B.reduce( ( p, c ) => getGcd( p, c ), B[ 0 ] );
    const lcmA = A.reduce( ( p, c ) => p * c / getGcd( p, c ), A[ 0 ] );

    // console.log( 'gcdB, lcmA', gcdB, lcmA );
    let i = 1;
    let candy = 0;
    let candies = [];
    while ( candy <= gcdB ) {
        candy = lcmA * i;
        candies.push( candy );
        i++;
    }
    // console.log( candies );
    candies = candies.filter( _ => !( gcdB % _ ) );
    // console.log( candies );
    return candies.length

}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");
}
