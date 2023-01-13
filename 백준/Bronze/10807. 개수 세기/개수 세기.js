let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map(Number);
let v = Number(input[2]);

const result = arr.filter(x => x === v);
console.log(result.length)