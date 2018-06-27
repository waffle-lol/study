//https://www.hackerrank.com/challenges/crush

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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    const container = [];
    let max = 0;
    
    for(var a0 = 0; a0 < m; a0++){
        var a_temp = readLine().split(' ');
        var a = parseInt(a_temp[0]);
        var b = parseInt(a_temp[1]);
        var k = parseInt(a_temp[2]);
        for (let i = a; i < b + 1; i++) {
            container[i] = (container[i] || 0) + k;
            max = max < container[i] ? container[i] : max;
        }
    }
    console.log(max);

}
