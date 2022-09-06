const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// 기본 자료형에서 처리할 수 있는 수에는 한계가 존재한다.
// BigInt는 임의의 정밀도로 정수를 나타낼 수 있는 JS의 새로운 숫자 데이터형이다
// BigInt를 출력할 때에는 toString() 으로 출력해야 한다. 그렇지 않으면 끝에 n이 붙어서 출력된다.
const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log((a+b).toString());