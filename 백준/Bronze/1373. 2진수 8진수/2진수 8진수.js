let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = "";
while(input.length >= 3) {
    answer = parseInt(input.slice(input.length-3),2).toString(8)+answer;
    input = input.slice(0, input.length-3);
}
console.log((input ? parseInt(input,2).toString(8) : "") + answer);