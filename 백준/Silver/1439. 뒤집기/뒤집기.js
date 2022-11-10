const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let setNumber = 0, answerCnt1 = 0, answerCnt2 = 0;

for(let i = 0; i < input.length; i++){
  if(setNumber !== parseInt(input[i])){
    if(i===0) answerCnt1++;
    else{
      if(input[i] !== input[i - 1]) answerCnt1++;
    }
  }
}
setNumber = 1;
for(let i = 0; i < input.length; i++){
  if(setNumber !== parseInt(input[i])){
    if(i===0) answerCnt2++;
    else{
      if(input[i] !== input[i - 1]) answerCnt2++;
    }
  }
}

console.log(Math.min(answerCnt1,answerCnt2))