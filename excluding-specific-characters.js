/**
 * https://www.hackerrank.com/challenges/excluding-specific-characters/problem
 */
var Regex_Pattern = /^[^\d][^aeiou][^bcDF][^\r\n\t\f\s][^AEIOU][^.,]$/;
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
