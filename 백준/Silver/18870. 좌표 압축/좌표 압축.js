const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const xList = input[1].split(' ').map(Number);
const sortedXList = [...new Set(xList)].sort((a,b) => a-b);;
const result = [];
const obj = {};

sortedXList.forEach((item,idx)=>obj[item] = idx);

for (let i = 0; i< n; i++) {
  result.push(obj[xList[i]]);
}

console.log(result.join(' '));