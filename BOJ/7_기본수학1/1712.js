let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const a = input[0]; 
const b = input[1]; 
const c = input[2]; 
const margin = c-b;

const n = Math.floor(a/margin) +1
console.log(margin <= 0 ? -1 : n);