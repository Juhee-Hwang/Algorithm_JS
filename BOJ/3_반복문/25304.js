let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let x = parseInt(input[0]);
let n = parseInt(input[1]);
let total = 0;

for (let i=1; i<=n; i++){
  let price = input[i+1].toString().split(' ').map(Number);
  total = total + (price[0]*price[1]);
}

if (x===total) {
  console.log('Yes');
} else {console.log('No')};