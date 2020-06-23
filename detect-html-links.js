/*
* https://www.hackerrank.com/challenges/detect-html-links/problem
*/
function processData(input) {
    let matches;
    res = ""
    let re = /<a href="(.*?)".*?>([\w .,\/]*)(?=<\/)/gm;
    while(matches = re.exec(input)){
            console.log(matches[1] + "," + matches[2].trim());
    }
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