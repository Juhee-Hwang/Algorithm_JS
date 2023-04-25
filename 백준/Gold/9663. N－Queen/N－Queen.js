const N = +require("fs").readFileSync("/dev/stdin").toString().trim();

// 퀸 위치
const queen = [];
// 퀸 개수
let countQueen = 0;

// row행 col열에 퀸을 놓을 수 있는지 검사
const check = (row, col) => {
  // 이전 행들을 검사
  for (let i = 0; i < row; i++) {
    // queen[i] === col은 같은 열일 경우를 의미
    // Math.abs(queen[i] - col) === row - i는 대각선에 위치할 경우를 의미
    // 대각선인 경우는 행과 열의 차가 같으니까!
    if (queen[i] === col || Math.abs(queen[i] - col) === row - i) {
      return false;
    }
  }
  return true;
};

const dfs = (row) => {
  // N개의 퀸을 모두 놓았다면 countQueen++
  if (row === N) {
    countQueen++;
    return;
  }
  // 0열부터 N-1열까지 검사
  for (let col = 0; col < N; col++) {
    // 여기서 row는 퀸을 놓을 행을, col은 퀸을 놓을 열을 의미
    // row행 col열에 퀸을 놓을 수 있다면
    if (check(row, col)) {
      // 퀸을 놓고
      queen[row] = col;
      // 다음 행으로 넘어간다.
      dfs(row + 1);
    }
  }
};

dfs(0);
console.log(countQueen);