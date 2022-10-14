const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const ab = Number(input[0]+input[1]);
const cd = Number(input[2]+input[3]);
console.log(ab+cd);