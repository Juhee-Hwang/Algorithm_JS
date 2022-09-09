const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const n = input[0];
let numList = [];

for (let i = 1; i <= n; i++) {
  numList.push(input[i]);
}
numList.sort((a, b) => a-b);

for (let j = 0; j < n; j++) {
  console.log(numList[j])
}