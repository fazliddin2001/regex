/**
 * https://www.hackerrank.com/challenges/detect-the-email-addresses/problem
 */
function processData(input) {
    const text = input.split('\n').join(' ')
    const regex = /[a-zA-Z][\w-.]*@[\w-.]+\.(com|in|org)/g
    const matches = new Set(text.match(regex))
    const result = [...matches].sort().join(';')
    console.log(result)
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
