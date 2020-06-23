/**
 * https://www.hackerrank.com/challenges/matching-x-repetitions/problem
 */
var Regex_Pattern = /^[a-zA-Z02468]{40}[\s13579]{5}$/;

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