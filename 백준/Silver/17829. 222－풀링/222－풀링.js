let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let array = [];
input.forEach((x) => {
  array.push(x.split(" ").map(Number));
});

// size는 해당영역의 크기, x,y는 해당영역의 시작점
function pooling(size, x, y) {
  let mid = (size / 2) | 0;
  // 영역의 크기가 2라면
  if (size == 2) {
    // 해당영역에 있는 4개의 값을 배열에 저장하고
    let answer = [
      array[x][y],
      array[x + 1][y],
      array[x][y + 1],
      array[x + 1][y + 1],
    ];
    // 내림차순 정렬 후 2번째 값을 반환
    answer.sort((a, b) => b - a);
    return answer[1];
  }
  // 그렇지 않은 경우 영역을 4개의 작은 영역으로 분할한 후, 각 영역의 2번째 값을 배열에 저장
  let lt = pooling(mid, x, y);
  let rt = pooling(mid, x + mid, y);
  let lb = pooling(mid, x, y + mid);
  let rb = pooling(mid, x + mid, y + mid);
  let answer = [lt, rt, lb, rb];
  answer.sort((a, b) => b - a);
  return answer[1];
}
console.log(pooling(n, 0, 0));
