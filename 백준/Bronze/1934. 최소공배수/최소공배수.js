const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = +input.shift();

let answer = '';

function gcd(a,b) {
  while (b!==0){
    let r = a%b;
    a = b;
    b = r;
  }
  return a;
}

const lcm = (a,b) => (a*b) / gcd(a,b);

for (let i = 0; i < testCase; i++){
  let num = input[i].split(' ').map(Number);
  let a = num[0];
  let b = num[1];
  answer += lcm(a,b) + '\n';
}

console.log(answer);