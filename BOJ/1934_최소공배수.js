const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = +input.shift();

let answer = '';

function gcd(a,b) {
  while (b!==0){
    let r = a%b; // r은 a를 b로 나눈 나머지
    a = b; // 그리고 위 해설처럼 a가 b가 되고 b는 r이 되는 과정을 반봅
    b = r;
  }
  return a; // b가 0이 되면 (나머지가 0이 되면) a값을 반환
}

const lcm = (a,b) => (a*b) / gcd(a,b); // 최소공배수를 구하는 변수

for (let i = 0; i < testCase; i++){
  let num = input[i].split(' ').map(Number); // 먼저 받아온 수를 공백으로 나눠준다.
  let a = num[0]; // 각각 a,b로 옮겨주고
  let b = num[1];
  answer += lcm(a,b) + '\n'; // 최소공배수로 돌려준 뒤 개행문자를 붙인다.
}

console.log(answer);