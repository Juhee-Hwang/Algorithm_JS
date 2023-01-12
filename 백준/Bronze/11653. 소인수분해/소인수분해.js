let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let i = 2;
let answer = [];

while (true) {
  if (n % i == 0){
      n = n / i;
      answer.push(i);
      i = 1;
  }
  i++; 
  if (i > n) {
    break;
  }
}

console.log(answer.join('\n'));
