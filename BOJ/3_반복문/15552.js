let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let test = Number(input[0]);
let result = "";

for (let i=1; i<=test; i++){
  let numbers = input[i].split(' ');
  result += Number(numbers[0])+Number(numbers[1]) + "\n";
}

console.log(result);