/**
 * https://www.hackerrank.com/challenges/matching-specific-characters/problem
 */
var Regex_Pattern = /\w{6}[123][120][xs0][30Aa][xsu][.,]/;

function processData(Test_String) {
    //Enter your code here
    
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
