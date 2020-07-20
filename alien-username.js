/***
 * https://www.hackerrank.com/challenges/alien-username/problem
 */
function processData(input) {
    const re = /^[_.]\d+[A-Za-z]*_?$/;
    if (re.test(input)) return "VALID\n"
    else return "INVALID\n";
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    let lines = _input.split("\n");
    let tests = parseInt(lines.shift());
    res = ""
    for(let i = 0; i < tests; i++){
        res += processData(lines[i]);
    }
    console.log(res)
});