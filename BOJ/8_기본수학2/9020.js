const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const caseNum = input[0];

// 입력값 까지의 소수 배열을 만들어주는 함수
function makePrimeNumberList (n) {
  let arr = Array(n-1).fill(true).fill(false,0,2);
  for (let a = 2; a*a<=n; a++){
    if (arr[a]){
      for (let b=a*a; b<=n; b+=a){
        arr[b] = false;
      }
    }
  }
  return arr;
}


for (let i = 1; i <= caseNum; i++) {
  let n = input[i];
  // n까지 소수 배열 생성
  let primeNumbers = makePrimeNumberList(n);
  // boolean값을 숫자값으로 재할당
  primeNumbers = primeNumbers.map((v,i) => (v) ? i : 0).filter(e => e);
  // 골드바흐 파티션 배열 생성
  let candidate = [];
  // n에서 소수를 뺀 값이 소수인지 확인하고, 소수가 맞다면 골드바흐 파티션으로 추가
  for (let num of primeNumbers) {
    if (primeNumbers.indexOf(n-num)!==-1) {
      candidate.push(num);
    }
  }
  // 골드바흐 파티션이 여러개일 경우 두 소수의 차이가 가장 작은 것을 출력하라고 했으니
  // 만약 골드바흐 파티션 후보가 짝수라면 중앙에 있는 두 숫자를 더한 것이 결과값
  // 만약 골드바흐 파티션 후보가 홀수라면 가운데에 있는 값이 두 번 더한 것이 결과값
  let resultIndex = Math.floor(candidate.length/2)
  if (candidate.length%2===0) {
    console.log(candidate[resultIndex-1]+' '+candidate[resultIndex]);
  } else {
    console.log(candidate[resultIndex]+' '+candidate[resultIndex]);
  }
}