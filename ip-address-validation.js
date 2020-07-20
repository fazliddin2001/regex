/**
 * https://www.hackerrank.com/challenges/ip-address-validation/problem
 */
function processData(input) {
    const ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    if (ipv4.test(input) && input.split('.').every(n=>n<=255)) return "IPv4\n";
    else if(ipv6.test(input) && input.split('.').every(h=>parseInt(h,16)<=0xffff)) return "IPv6\n"
    else return "Neither\n";
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