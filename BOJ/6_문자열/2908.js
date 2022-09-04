let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0];
let b = input[1];
let big = 0;

function flipNumber (arr) {
  let result ='';
  for (let i = 1; i<=arr.length; i++) {
    result = result + arr[arr.length-i];
  }
  return parseInt(result);
}

a = flipNumber(a);
b = flipNumber(b);

if (a>=b) {
  big = a;
} else if (b>a) {
  big = b;
}

console.log(big);

