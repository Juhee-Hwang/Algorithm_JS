const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const caseNum = input[0];

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
  let primeNumbers = makePrimeNumberList(n);
  primeNumbers = primeNumbers.map((v,i) => (v) ? i : 0).filter(e => e);
  let candidate = [];

  for (let num of primeNumbers) {
    if (primeNumbers.indexOf(n-num)!==-1) {
      candidate.push(num);
    }
  }
  let resultIndex = Math.floor(candidate.length/2)
  if (candidate.length%2===0) {
    console.log(candidate[resultIndex-1]+' '+candidate[resultIndex]);
  } else {
    console.log(candidate[resultIndex]+' '+candidate[resultIndex]);
  }
}