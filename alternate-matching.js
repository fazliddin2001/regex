/**
 * https://www.hackerrank.com/challenges/alternative-matching/problem
 */
var Regex_Pattern = /^(Mr|Mr|Mrs|Ms|Dr|Er)\.[A-Za-z]+$/;

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