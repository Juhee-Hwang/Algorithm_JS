const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const testCase = Number(input[0]);

for (let i = 1; i <=testCase; i++) {
  let customer = input[i].toString().split(' ').map(Number);
  let h = customer[0];
  let w = customer[1];
  let n = customer[2];
  let roomNumber = [];
  
  for (let j = 1; j <= w; j++) { 
    for (let k = 1; k <= h; k++){
      roomNumber.push(k+('00'+ j).slice(-2));
    }
  }
  console.log(roomNumber[n-1]);
}