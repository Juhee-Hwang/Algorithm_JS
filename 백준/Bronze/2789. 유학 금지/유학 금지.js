let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let cambridge = 'CAMBRIDGE'.split('');
let result = '';

input.forEach((str) => !cambridge.includes(str) ? result += str : "")

console.log(result);