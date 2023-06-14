let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map((el) => el.split(" ").map(Number));

let zeroAnswer = getZeroAnswer();
let N = zeroAnswer.length;
let answer = "";
DFS(0);

function DFS(L) {
  if (L === N) {
    for (let x of input) {
      answer += `${x.join(" ")}\n`;
    }
    console.log(answer);
    process.exit(0);
  } else {
    let [x, y] = zeroAnswer[L];

    for (let i = 1; i <= 9; i++) {
      if (check(x, y, i)) {
        input[x][y] = i;
        DFS(L + 1);
        input[x][y] = 0;
      }
    }
  }
}

function check(x, y, v) {
  let threeRow = Math.floor(x / 3) * 3;
  let threeCol = Math.floor(y / 3) * 3;

  for (let i = 0; i < 9; i++) {
    if (input[x][i] === v || input[i][y] === v) return false;
  }

  for (let i = threeRow; i < threeRow + 3; i++) {
    for (let j = threeCol; j < threeCol + 3; j++) {
      if (input[i][j] === v) return false;
    }
  }

  return true;
}

function getZeroAnswer() {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (input[i][j] === 0) arr.push([i, j]);
    }
  }
  return arr;
}
