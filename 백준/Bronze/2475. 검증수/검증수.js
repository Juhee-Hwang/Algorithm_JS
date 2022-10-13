const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let answer = 0;
for (let i = 0; i<input.length; i++){
  answer += input[i]**2;
}
console.log(answer%10);