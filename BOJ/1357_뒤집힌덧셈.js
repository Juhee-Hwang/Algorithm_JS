const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
function rev(x){
  let answer = "";
  for (let i = x.length-1; i>=0; i--){
    answer += x[i];
  }
  return Number(answer);
}
let result = rev(input[0])+rev(input[1])
console.log(rev(result.toString()));