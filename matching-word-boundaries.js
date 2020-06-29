/**
 * https://www.hackerrank.com/challenges/matching-word-boundaries/problem
 */

var Regex_Pattern = /\b[aeiouAEIOU][a-zA-Z]*\b/;

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
