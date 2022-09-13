const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const numList = [];

for (let i = 1; i<=n; i++) {
  numList.push(input[i].toString().trim().split(' ').map(Number));
}

// numList[1]이 같으면 numList[0] 기준으로 오름차순 정렬
numList.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

const result = numList.join('\n').replace(/,/g, ' ');
console.log(result);



// 2차원 배열 오름차순
// numList.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
// 2차원 배열 내림차순
// numList.sort((a, b) => b[0] + b[1] - (a[0] + a[1]))