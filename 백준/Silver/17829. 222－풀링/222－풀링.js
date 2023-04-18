let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let array = [];
input.forEach((x) => {
  array.push(x.split(" ").map(Number));
});

function pooling(size, x, y) {
  let mid = (size / 2) | 0;
  if (size == 2) {
    let answer = [
      array[x][y],
      array[x + 1][y],
      array[x][y + 1],
      array[x + 1][y + 1],
    ];
    answer.sort((a, b) => b - a);
    return answer[1];
  }
  let lt = pooling(mid, x, y);
  let rt = pooling(mid, x + mid, y);
  let lb = pooling(mid, x, y + mid);
  let rb = pooling(mid, x + mid, y + mid);
  let answer = [lt, rt, lb, rb];
  answer.sort((a, b) => b - a);
  return answer[1];
}
console.log(pooling(n, 0, 0));