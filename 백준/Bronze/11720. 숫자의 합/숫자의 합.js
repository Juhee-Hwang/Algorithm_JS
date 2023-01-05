let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let numbers = input[1].split('').map(Number);


console.log(numbers.reduce((a,b) =>a+b,0));
