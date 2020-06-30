/**
 * https://www.hackerrank.com/challenges/backreferences-to-failed-groups/problem
 */
var Regex_Pattern = /^\d{2}(-?)(\d{2}\1){2}\d{2}$/;

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