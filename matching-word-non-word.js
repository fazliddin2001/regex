/**
 * https://www.hackerrank.com/challenges/matching-word-non-word/problem
 */
var Regex_Pattern = /\w{3}\W\w{10}\W\w{3}/;

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
