const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const k = input[0].split(' ').map(Number)[1];
let numList = input[1].split(' ').map(Number);

// 내림차순
numList.sort((a,b) => b-a);

console.log(numList[k-1]);
