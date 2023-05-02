const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

const dfs = (cnt, result, plus, minus, mul, div) => {
  switch (cnt) {
    // cnt가 N이 되면 모든 연산자를 다 사용한 것이므로 max, min값을 갱신
    case N:
      max = Math.max(max, result);
      min = Math.min(min, result);
      return;
    // cnt가 N이 아니면 연산자를 하나씩 사용하면서 dfs를 재귀호출
    default:
      if (plus > 0) {
        dfs(cnt + 1, result + arr[cnt], plus - 1, minus, mul, div);
      }
      if (minus > 0) {
        dfs(cnt + 1, result - arr[cnt], plus, minus - 1, mul, div);
      }
      if (mul > 0) {
        dfs(cnt + 1, result * arr[cnt], plus, minus, mul - 1, div);
      }
      if (div > 0) {
        dfs(cnt + 1, ~~(result / arr[cnt]), plus, minus, mul, div - 1);
      }
      break;
  }
};

dfs(1, arr[0], operators[0], operators[1], operators[2], operators[3]);

console.log(max);
console.log(min);