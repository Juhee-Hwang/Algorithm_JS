const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const candy = arr.map((el) => el.split(""));
let max = 0;

// 가로로 바꾸기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    [candy[i][j], candy[i][j + 1]] = [candy[i][j + 1], candy[i][j]];
    const result = check(candy);
    if (result > max) max = result;
    [candy[i][j], candy[i][j + 1]] = [candy[i][j + 1], candy[i][j]];
  }
}

// 세로로 바꾸기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    [candy[j][i], candy[j + 1][i]] = [candy[j + 1][i], candy[j][i]];
    const result = check(candy);
    if (result > max) max = result;
    [candy[j][i], candy[j + 1][i]] = [candy[j + 1][i], candy[j][i]];
  }
}

console.log(max);

function check(candy) {
  let max = 0;

  // 가로로 같은 캔디 찾기
  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 0; j < N - 1; j++) {
      if (candy[i][j] === candy[i][j + 1]) {
        count++;
      } else {
        if (count > max) max = count;
        count = 1;
      }
    }
    if (count > max) max = count;
  }

  // 세로로 같은 캔디 찾기
  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 0; j < N - 1; j++) {
      if (candy[j][i] === candy[j + 1][i]) {
        count++;
      } else {
        if (count > max) max = count;
        count = 1;
      }
    }
    if (count > max) max = count;
  }

  return max;
}
