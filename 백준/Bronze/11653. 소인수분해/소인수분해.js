const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = Number(input);
let i = 2;

while (n != 1) {
  if (n%i == 0){
    console.log(i);
    n = n/i;
  } else {
    i++;
  }
}