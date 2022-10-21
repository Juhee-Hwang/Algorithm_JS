let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((x)=>+x);
input.pop();

const maxNum = Math.max(...input);
const checkNum = new Array(maxNum + 1).fill(false);
for(let i = 2; i <= maxNum; i++){
  if(!checkNum[i]){
    for(let j = i*i; j<=maxNum; j+=i){
      checkNum[j] = true;
    }
  }
}

let result = '';
input.map((x) => {
  for(let i = 3; i < x; i+=2){
    if(!checkNum[i] && !checkNum[x-i]) {
      result += `${x} = ${i} + ${x-i}\n`;
      break;
    }
  }
});
console.log(result);