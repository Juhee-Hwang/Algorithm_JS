let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";
let k;
let s;

input.forEach((x) => {
  [k, ...s] = x.split(" ").map(Number);
  DFS(0, []);
  answer += "\n";
});

function DFS(L, pick) {
  if (pick.length === 6) {
    answer += `${pick.join(" ")}\n`;
    return;
  }
  for (let i = L; i < k; i++) {
    DFS(i + 1, [...pick, s[i]]);
  }
}

console.log(answer);
