const N = +require("fs").readFileSync("/dev/stdin").toString().trim();
let DP = [1, 3];
for (let i = 2; i <= N; i++) {
  DP[i] = (DP[i - 1] * 2 + DP[i - 2]) % 9901;
}
console.log(DP[N]);