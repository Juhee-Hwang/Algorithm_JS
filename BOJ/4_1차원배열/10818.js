let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let a = input[1].split(' ').map(Number);

console.log(Math.min(...a), Math.max(...a));
