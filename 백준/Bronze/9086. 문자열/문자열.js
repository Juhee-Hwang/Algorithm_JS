const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = [];
for (let i = 1; i<=input[0]; i++){
  answer.push(input[i][0] + input[i].at(-1))
}
console.log(answer.join('\n'));