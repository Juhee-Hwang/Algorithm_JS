const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const testCase = Number(input[0]);

for (let i = 1; i <=testCase; i++) {
  let customer = input[i].toString().split(' ').map(Number);
  let h = customer[0];
  let w = customer[1];
  let n = customer[2];
  let roomNumber = [];
  
  // 방 번호 배정 우선순위에 따른 배열 생성 (101,201,301...102,202...)
  for (let j = 1; j <= w; j++) { 
    for (let k = 1; k <= h; k++){
      roomNumber.push(k+('00'+ j).slice(-2));
    }
  }
  // 고객의 순서에 따라 방 배정
  console.log(roomNumber[n-1]);
}