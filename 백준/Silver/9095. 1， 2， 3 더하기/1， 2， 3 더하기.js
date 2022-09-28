const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((x)=>+x);
const testCase = input[0];
let result = [];

function sumByOneTwoThree(n) {
  let arr = [0,1,2,4]
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