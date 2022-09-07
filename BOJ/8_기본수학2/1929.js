const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const m = Number(input[0]);
const n = Number(input[1]);
let primeNumber = Array(n+1).fill(true);
primeNumber[0] = false;
primeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
  if(primeNumber[i]) {
    let a = 2;
    while (i*a <= n) {
      primeNumber[i*a] =false;
      a++;
    }
  }
}


let result ='';
for(let j = m; j<=n; j++) {
  if(primeNumber[j]) {
    result += j + '\n';
  }
}

console.log(result);