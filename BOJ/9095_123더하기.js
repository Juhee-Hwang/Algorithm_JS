const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((x)=>+x);
const testCase = input[0];
let result = [];

function sumByOneTwoThree(n) {
  let arr = [0,1,2,4] // 0부터 3까지 1,2,3의 조합으로 숫자를 나타낼 수 있는 방법의 수
  // n이 3보다 클 때부터는 앞에 있는 3개의 조합을 더한 값과 같다는 규칙이 발견된다.
  if (n>3){
    for (let j = 4; j<=n;j++){
      arr[j] = arr[j-1] + arr[j-2] + arr[j-3];
    }
  }
  return arr[n];
}

for (let i = 1; i<=testCase; i++){
  result.push(sumByOneTwoThree(input[i]));
}

console.log(result.join('\n'));