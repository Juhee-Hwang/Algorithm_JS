const input = require('fs').readFileSync('/dev/stdin');
const n = Number(input);
// 가능한 조합을 담아줄 배열
let sugar = [];

// 3kg, 5kg 설탕봉지를 조합하여 Nkg를 맞출 수 있는 개수 조합을 찾아 도는 반복문
for (let i = 0; i<=(n/3); i++) {
  for (let j = 0; j<=(n/5); j++) {
    // 만약 현재의 개수대로 챙겼을 때 Nkg와 딱 맞다면 배열에 설탕 봉지 개수의 합 추가
    if (3*i + 5*j === n) {
      sugar.push(i+j);
    }
  }
}

// 만약 딱 맞출 수 있는 조합이 없다면 -1
if (sugar.length===0) {
  sugar.push(-1);
}

console.log(Math.min(...sugar));