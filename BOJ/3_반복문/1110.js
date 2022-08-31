let input = require('fs').readFileSync('/dev/stdin');

input = parseInt(input);
let sum = input;
let a = parseInt(sum/10);
let b = parseInt(sum%10);
let newNum = parseInt((a+b)%10);
let n = 0;

while (true) {
  a = parseInt(sum/10);
  b = parseInt(sum%10);
  newNum = parseInt((a+b)%10);
  sum = b*10 + newNum;
  n++
  if(sum === input) {
    console.log(n)
    break
  }
}

