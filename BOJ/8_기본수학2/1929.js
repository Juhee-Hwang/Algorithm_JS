const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const m = Number(input[0]);
const n = Number(input[1]);
// 소수 배열 생성
let primeNumber = Array(n+1).fill(true);
// 0, 1은 소수가 아님
primeNumber[0] = false;
primeNumber[1] = false;

// n까지 소수가 아닌 숫자 false값 할당
for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
  if(primeNumber[i]) {
    let a = 2;
    while (i*a <= n) {
      primeNumber[i*a] =false;
      a++;
    }
  }
}

// m부터 n 사이 소수 결과값에 할당
let result ='';
for(let j = m; j<=n; j++) {
  if(primeNumber[j]) {
    result += j + '\n';
  }
}
console.log(result);