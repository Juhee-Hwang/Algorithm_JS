const input = require('fs').readFileSync('/dev/stdin');

let n = 1;
let sum = 1;

while (sum < input) {
  sum = sum + 6 * n;
  n++;
}

console.log(n);
