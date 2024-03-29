let [n, box] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = +n;
box = box.split(" ").map(Number);

const DP = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (box[j] < box[i]) DP[i] = Math.max(DP[i], DP[j] + 1);
  }
}

console.log(Math.max(...DP));