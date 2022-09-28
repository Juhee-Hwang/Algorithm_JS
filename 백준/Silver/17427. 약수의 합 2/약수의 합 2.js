let input = Number(require('fs').readFileSync('/dev/stdin'));
let sum = 0;

for (let i = 1; i<=input; i++) {
  sum += i *Math.floor(input / i);
}

console.log(sum);