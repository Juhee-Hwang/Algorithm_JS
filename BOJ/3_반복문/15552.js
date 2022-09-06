let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let test = Number(input[0]);
let result = "";

for (let i=1; i<=test; i++){
  let numbers = input[i].split(' ');
  result += Number(numbers[0])+Number(numbers[1]) + "\n";
}

// 출력을 for문에서 해주지 말고 개행문자를 넣으면 시간초과가 안뜬다!
console.log(result);