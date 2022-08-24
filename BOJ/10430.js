
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let a = input[0];
let b = input[1];
let c = input[2];

console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);