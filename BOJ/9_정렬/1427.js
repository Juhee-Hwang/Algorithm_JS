const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
// 내림차순
input.sort((a,b) => b-a);
console.log(Number(input.join('')));
