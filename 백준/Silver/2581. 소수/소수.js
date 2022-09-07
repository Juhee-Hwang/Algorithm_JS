const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const m = input[0];
const n = input[1];
let primeNumber = [];

for (let i = m; i <= n; i++) {
  let isPrimeNumber = true;
  
  if (i===1) {
    isPrimeNumber = false;
  } 
  else if (i===2) {
    isPrimeNumber = true;
  }
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

if (primeNumber.length===0) {
  console.log(-1);
} else {
  console.log(primeNumber.reduce((a,b)=> a+b,0));
  console.log(Math.min(...primeNumber));
}
