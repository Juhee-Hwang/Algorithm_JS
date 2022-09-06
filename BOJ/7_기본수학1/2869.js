const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const a = input[0];
const b = input[1];
const v = input[2];

// 최종 거리에서 처음 올라간 만큼 제외하고, 
// 자면서 떨어지고 다시 올라간 만큼 나눠주면 몇밤이 더 필요한지 알 수 있음
let days = 1 + Math.ceil((v-a) / (a-b));

console.log(days);