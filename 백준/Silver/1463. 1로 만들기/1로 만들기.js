const input = Number(require('fs').readFileSync('/dev/stdin'));
const DP = new Array(input+1).fill(0);

for (let i = 2; i <= input; i++) {
  // 1을 뺀 경우의 최솟값
  DP[i] = DP[i - 1] + 1;
  // 2로 나눴을 경우의 최솟값
  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }
  // 3로 나눴을 경우의 최솟값
  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
  }
}

console.log(DP[input]);
