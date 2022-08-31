let input = require('fs').readFileSync('/dev/stdin');
input = parseInt(input);
let result = 0;

for (let i=1; i<=input; i++) {
  result = result + i;
}
console.log(result);