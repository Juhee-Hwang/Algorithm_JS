const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
input.sort((a,b)=>b-a)
console.log(input[1]);