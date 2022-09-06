const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const testCase = input[0];

for (let i = 0; i < testCase; i++) {
  let current = i * 2 + 1;
  let k = input[current];
  let n = input[current+1];
  let result = 1;
  // 파스칼삼각형, 이항계수 써서 풀어보자
  // k층 n호에 사는 사람의 수는 = (k+n) 제곱 전개식의 n번째 항계수
  
  for (let j = 0;  j < n-1; j++) {
    // (k+n)(k+n-1)(k+n-2)...(k+n-(n-2))(k+n-(n-1)) / n! -> 이게 n번째 항계수 계산식
    result = result * (k + n - j);
  }
  for (let j = 1; j < n; j++) {
    result = result / j;
  }

  console.log(Math.abs(result));
}
