const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const numList = [];

for (let i = 1; i<=n; i++) {
  numList.push(input[i].toString().trim().split(' ').map(Number));
}

// 오름차순
// numList.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
// 내림차순
// numList.sort((a, b) => b[0] + b[1] - (a[0] + a[1]))


// numList[0]이 같으면 numList[1] 기준으로 오름차순 정렬
numList.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0]
  }
})

const result = numList.join('\n').replace(/,/g, ' ');
console.log(result);