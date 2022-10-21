const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = new Array(26).fill(0);
// 97 ~ 122
for (let i = 0; i<input.length; i++){
  let alphabetNum = input.charCodeAt(i);
  answer[alphabetNum-97]++ ;
}

console.log(answer.join(' '));