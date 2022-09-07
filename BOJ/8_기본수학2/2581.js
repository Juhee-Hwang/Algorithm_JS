const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const m = input[0];
const n = input[1];
// 소수를 담을 배열
let primeNumber = [];

for (let i = m; i <= n; i++) {
  let isPrimeNumber = true;
  // 1은 소수가 아님
  if (i===1) {
    isPrimeNumber = false;
  } 
    // 2는 소수가 맞음
  else if (i===2) {
    isPrimeNumber = true;
  }
  // 3 이상의 숫자들은 해당 숫자의 절반까지 반복하며 나누었을 때 
  // 약수가 나오지 않는 경우 (=나누어 떨어지지 않는 경우) 소수이다
  else {
    for (let j = 2; j <= parseInt(i/2); j++) {
      if (i%j===0) {
        isPrimeNumber = false;
      }
    }
  }
  if(isPrimeNumber) {
    primeNumber.push(i);
  }
}
// 소수가 없을 경우 -1 출력
if (primeNumber.length===0) {
  console.log(-1);
} else {
  console.log(primeNumber.reduce((a,b)=> a+b,0));
  console.log(Math.min(...primeNumber));
}
