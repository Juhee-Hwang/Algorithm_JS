const input = require('fs').readFileSync('/dev/stdin');
let x = parseInt(input);
let n = 0;
let sum = 0;

while (sum < x) {
  n++;
  sum = sum + n;
}

const index = sum - x;

if(n%2 === 0) {
  console.log(`${n-index}/${1+index}`);
} else if (n%2 === 1) {
  console.log(`${1+index}/${n-index}`);
}