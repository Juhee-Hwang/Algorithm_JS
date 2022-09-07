const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = Number(input);
let i = 2;

while (n != 1) {
  // i로 나누어 떨어진다면 안 나누어 떨어질 때까지, i값을 출력하고 나누기
  if (n%i == 0){
    console.log(i);
    n = n/i;
  } 
  // i로 안 나누어 떨어지면 i값 높여주기
  else {
    i++;
  }
}