const input = require('fs').readFileSync('/dev/stdin');

// let n = 0;
// let arithmeticSeries = (3*n*n)-(2*n);

// while (arithmeticSeries <parseInt(input)){
//   n++
//   arithmeticSeries = (3*n*n)-(2*n);
// }
// console.log(n);


let n = 1;
let sum = 1;

while (sum < input) {
  sum = sum + 6 * n;
  n++;
}

console.log(n);
