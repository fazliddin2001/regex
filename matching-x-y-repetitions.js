/***
 * https://www.hackerrank.com/challenges/matching-x-y-repetitions/problem
 */

var Regex_Pattern = /^\d{1,2}[A-Za-z]{3,}.{0,3}$/;

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
