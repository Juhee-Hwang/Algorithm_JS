const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const w = [0, ...input.map((line) => parseInt(line.split(" ")[0]))];
const v = [0, ...input.map((line) => parseInt(line.split(" ")[1]))];
const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    // i번째 물건을 담지 않을 경우
    dp[i][j] = dp[i - 1][j];
    // i번째 물건을 선택한 경우
    if (j >= w[i]) {
      //i번째 물건의 무게를 뺀 j-w[i]무게에서 i-1번째까지 고려했을 때의 최대 가치
      // 더하기 i번째 물건의 가치
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - w[i]] + v[i]);
    }
  }
}
console.log(dp[N][K]);
