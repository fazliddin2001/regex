/**
 * https://www.hackerrank.com/challenges/matching-range-of-characters/problem
 */

var Regex_Pattern = /^[a-z][1-9][^a-z][^A-Z][A-Z].*$/;

function processData(Test_String) {
    console.log(!!Test_String.match(Regex_Pattern));
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
