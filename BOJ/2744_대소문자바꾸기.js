const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';
for (let i = 0; i<input.length; i++){
  // 아스키코드로 변환했을 때 90보다 작거나 같으면, 즉 90보다 작거나 같으면 소문자로
  if (input.charCodeAt(i)<=90){
    answer += input[i].toLowerCase()
  } 
  // 아닐 경우 대문자로
  else {
    answer += input[i].toUpperCase()
  }
}
console.log(answer);