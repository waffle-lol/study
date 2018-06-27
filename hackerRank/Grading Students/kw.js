//https://www.hackerrank.com/challenges/grading

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

function solve(grades){
    // Complete this function
    const g = [];
    for ( let i = 0, length = grades.length; i < length; i++ ) {
        const grade = grades[ i ] * 1;
        if ( grade < 38 ) g.push( grade );
        else {
            let _grade = grade.toString( 5 );
            if ( _grade[ _grade.length - 1 ] * 1 > 2 ) g.push( parseInt( _grade.slice( 0, -1 ) + '0', 5 ) + 5 )
            else g.push( grade );
        }
    }
    return g;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
}
