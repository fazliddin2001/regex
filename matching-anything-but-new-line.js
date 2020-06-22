/**
 * https://www.hackerrank.com/challenges/matching-anything-but-new-line/problem
 */
var Regex_Pattern = /^(.{3}\.){3}.{3}$/g;

function processData(Test_String) {
    var matches = Test_String.match(Regex_Pattern);
    var match = matches != null && matches.length > 0;
    console.log(match);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input.trim();
});

process.stdin.on("end", function () {
   processData(_input);
});