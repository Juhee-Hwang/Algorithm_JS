let [n, numArr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
numArr = numArr.split(" ").map(Number);

const DP = [];

for (let i = 0; i < n; i++) {
  DP[i] = numArr[i];
// 만약 탐색할 값과 이전 값의 합이 탐색할 값보다 크다면,
// 즉, 앞에 있던 값들의 합이 현재 값보다 크다면
// 현재 값을 이전 값에 합하여 DP 배열에 추가한다.
  if (DP[i] < DP[i - 1] + numArr[i]) {
    DP[i] = DP[i - 1] + numArr[i];
  }
}

console.log(Math.max(...DP));