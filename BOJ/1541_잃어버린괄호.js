const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('-').map((str)=>str.split('+').map(Number).reduce((a,b)=>a+b,0));
let result = input[0] * 2 - input.reduce((a,b)=>a+b,0);
console.log(result);