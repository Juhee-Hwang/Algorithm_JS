let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let multiple = 1;
let answer = [];

for (let i = 0; i<input.length; i++) {
  multiple *= input[i];
}
multiple = multiple.toString().split('');

for (let i = 0; i<=9; i++) {
  answer.push(multiple.filter(a=>a===i.toString()).length);
}

console.log(answer.join('\n'));
