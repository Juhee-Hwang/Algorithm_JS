const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const numberList = input[1].split(' ').map(Number);
// 소수를 담을 배열
let primeNumber = [];

for (let i = 0; i < n; i++) {
  let a = numberList[i];
  let isPrimeNumber = true;
  
  // 1은 소수가 아님
  if (a===1) {
    isPrimeNumber = false;
  } 
  // 2는 소수가 맞음
  else if (a===2) {
    isPrimeNumber = true;
  }
  // 3 이상의 숫자들은 해당 숫자의 절반까지 반복하며 나누었을 때 
  // 약수가 나오지 않는 경우 (=나누어 떨어지지 않는 경우) 소수이다
  else {
    for (let j = 2; j <= parseInt(a/2); j++) {
      if (a%j===0) {
        isPrimeNumber = false;
      }
    }
  }

  if(isPrimeNumber) {
    primeNumber.push(a);
  }
}

console.log(primeNumber.length);