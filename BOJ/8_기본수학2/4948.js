const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let n = 0;
// 입력값으로 0이 올 떄까지 반복
while (input[n]!==0) {
  let N = input[n];
  // 소수 배열 생성
  let primeNumber = Array(2*N+1).fill(true);
  // 0, 1은 소수가 아님
  primeNumber[0] = false;
  primeNumber[1] = false;
  // n까지 소수가 아닌 숫자 false값 할당
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