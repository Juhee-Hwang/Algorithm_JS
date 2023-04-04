let [n, ...wine] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
wine = wine.map(Number);

const DP = [];
DP[0] = 0;
DP[1] = wine[0];
DP[2] = wine[0] + wine[1];

for (let i = 3; i <= n; i++) {
  DP[i] = Math.max(
    // n번째 포도주를 마시고, n-1 번째 포도주를 마시고, n-2번째 포도주를 건너뛰고 n-3의 최댓값을 더하거나
    DP[i - 3] + wine[i - 1] + wine[i - 2],
    // n번째 포도주를 마시고, n-2의 최댓값을 더하거나
    DP[i - 2] + wine[i - 1],
    // n번째 포도주를 먹지 않거나
    DP[i - 1]
  );
}

console.log(DP[n]);
