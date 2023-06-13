let [N, ...paintCost] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

paintCost = paintCost.map((el) => el.split(" ").map((el) => Number(el)));

const HOME = [];

for (let i = 0; i < N; i++) {
  // HOME배열에 각 집마다 RGB를 칠하는 비용을 넣는다.
  HOME.push(paintCost[i]);
  // 첫 번째 집은 그대로 두고, 두 번째 집부터는 이전 집에서 칠한 색과 다른 색으로 칠하는 비용을 누적시킨다.
  if (i === 0) continue;
  for (let j = 0; j < 3; j++) {
    // HOME배열에 각 집마다 RGB를 칠하는 비용을 누적시킨다.
    // Math.min()을 사용하여 이전 집에서 칠한 색과 다른 색으로 칠하는 비용 중에서 최소값을 누적시킨다.
    // %3을 해주는 이유는 인덱스 상에서 0,1,2를 반복하기 위해서이다.
    HOME[i][j] += Math.min(HOME[i - 1][(j + 1) % 3], HOME[i - 1][(j + 2) % 3]);
  }
}

// HOME배열의 마지막 요소에서 RGB를 칠하는 비용 중에서 최소값을 출력한다.
console.log(Math.min(...HOME[N - 1]));