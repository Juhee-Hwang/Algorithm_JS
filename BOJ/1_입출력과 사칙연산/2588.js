let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);


let a = input[0];
let b = input[1];

console.log(a*(b%10));
console.log(a*parseInt(b%100/10));
console.log(a*parseInt(b/100));
console.log(a*b);