const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [has, need] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort();
let max = Math.max(...lines);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let piece = lines.map((line) => parseInt(line / mid)).reduce((a, b) => a + b, 0);
  piece >= need ? min = mid + 1 : max = mid - 1;
}

console.log(max);