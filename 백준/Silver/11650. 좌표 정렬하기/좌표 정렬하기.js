const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const numList = [];

for (let i = 1; i<=n; i++) {
  numList.push(input[i].toString().trim().split(' ').map(Number));
}

numList.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0]
  }
})

const result = numList.join('\n').replace(/,/g, ' ');
console.log(result);