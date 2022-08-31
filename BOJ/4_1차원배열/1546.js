let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let scores = input[1].split(' ').map(Number);
let m = Math.max(...scores);
let result = [];

for (let i = 0; i < n; i++){
  result.push((scores[i]/m)*100);
}

const sum = result.reduce((a, b) => a + b, 0);
const avg = (sum / n) || 0;

console.log(avg);
