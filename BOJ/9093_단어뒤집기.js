const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = [];
function reverseStr(str){
  let result = "";
  for (let i = str.length-1; i>=0; i--){
    result += str[i];
  }
  return result
}

for (let j = 1; j<=input[0]; j++){
  let stringArr = input[j].split(' ');
  let answerStr = "";
  for (let k = 0; k<stringArr.length; k++){
    if(stringArr[k].length>1){
      answerStr += reverseStr(stringArr[k])+" ";
    } else {
      answerStr += stringArr[k]+" ";
    }
  }
  answer.push(answerStr);
}

console.log(answer.join('\n'));