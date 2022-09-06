const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const testCase = input[0];

for (let i = 0; i < testCase; i++) {
  let current = i * 2 + 1;
  let k = input[current];
  let n = input[current+1];
  let result = 1;
  
  for (let j = 0;  j < n-1; j++) {
    result = result * (k + n - j);
  }
  for (let j = 1; j < n; j++) {
    result = result / j;
  }
  console.log(Math.abs(result));
}
