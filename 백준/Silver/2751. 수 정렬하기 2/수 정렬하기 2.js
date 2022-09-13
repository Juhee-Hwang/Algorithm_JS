const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const n = input[0];
let numList = [];

for (let i = 1; i <= n; i++) {
  numList.push(input[i]);
}
numList.sort((a,b) => a-b);

console.log(numList.join('\n'));