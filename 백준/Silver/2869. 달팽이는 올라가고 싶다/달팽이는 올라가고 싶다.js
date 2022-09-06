const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const a = input[0];
const b = input[1];
const v = input[2];

let days = 1 + Math.ceil((v-a) / (a-b));

console.log(days);