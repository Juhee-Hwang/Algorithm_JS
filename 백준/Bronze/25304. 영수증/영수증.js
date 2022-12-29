let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let x = parseInt(input[0]);
let n = parseInt(input[1]);
let receipt = input.slice(-n);

// 총 결제금액
let total = 0;

for (let i = 0; i < n; i++){
  let price = receipt[i].toString().split(' ');
  total = total + (price[0] * price[1]);
}

x === total ? console.log('Yes') : console.log('No');