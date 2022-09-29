const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';
for (let i = 0; i<input.length; i++){
  if (input.charCodeAt(i)<=90){
    answer += input[i].toLowerCase()
  } else {
    answer += input[i].toUpperCase()
  }
}
console.log(answer);