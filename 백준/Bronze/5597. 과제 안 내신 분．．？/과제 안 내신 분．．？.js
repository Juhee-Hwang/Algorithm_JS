let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let answer = [];

for(let i = 1; i <= 30; i++) {
  input.includes(i) ? "" : answer.push(i); 
}
console.log(answer.join('\n'))
