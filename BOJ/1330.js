let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let a = input[0];
let b = input[1];
let result = '';

if (b<a) {
  result = ">";
} else if (b>a) {
  result = "<";
} else if (b===a) {
  result = "==";
}

console.log(result);