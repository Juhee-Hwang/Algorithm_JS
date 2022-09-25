let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let candidateList = [];
candidateList.push(input[0]);
candidateList.push(input[1]);
candidateList.push(Math.abs(input[0]-input[2]));
candidateList.push(Math.abs(input[1]-input[3]));
console.log(Math.min(...candidateList));