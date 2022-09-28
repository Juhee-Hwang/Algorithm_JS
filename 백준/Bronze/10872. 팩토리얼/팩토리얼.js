const input = require('fs').readFileSync('/dev/stdin');
let answer = 1;
for (let i = 1; i <= input; i++) {
  answer *= i;
}

console.log(answer);