/**
 * https://www.hackerrank.com/challenges/matching-zero-or-more-repetitions/problem
 */
var Regex_Pattern = /^\d{2,}[a-z]*[A-Z]*$/;

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
