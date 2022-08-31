let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let test = input[0];

for (let i=1; i<=test; i++){
  let numbers = input[i].split(' ').map(Number);
  console.log(numbers[0]+numbers[1]);
}