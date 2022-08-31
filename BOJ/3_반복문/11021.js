let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let caseNum = parseInt(input[0]);

for (let i=1; i<=caseNum ; i++) {
  let numbers = input[i].toString().split(' ').map(Number);
  console.log(`Case #${i}: ${numbers[0]+numbers[1]}`);
}