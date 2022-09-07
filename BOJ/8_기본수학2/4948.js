const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let n = 0;
while (input[n]!==0) {
  let N = input[n];
  let primeNumber = Array(2*N+1).fill(true);
  primeNumber[0] = false;
  primeNumber[1] = false;
  for (let i = 2; i <= Math.ceil(Math.sqrt(2*N)); i++) {
    if(primeNumber[i]) {
      let a = 2;
      while (i*a <= 2*N) {
        primeNumber[i*a] = false;
        a++;
      }
    }
  }
  let result = [];
  for (let j = N+1; j <= 2*N; j++){
    if(primeNumber[j]) {
      result.push(j);
    }
  }
  console.log(result.length);
  n++
}