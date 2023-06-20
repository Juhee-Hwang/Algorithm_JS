const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line){
    input.push(line);
}).on("close", function() {
    solution(input);
    process.exit();
})

function solution(input) {
  const [n, m] = input.shift().split(" ").map(Number);
  const nodes = input.map((e) => e.split(" ").map(Number));
  const parents = new Array(n + 1).fill(-1);

  function find(x) {
    if (parents[x] < 0) return x;
    parents[x] = find(parents[x]);
    return parents[x];
  }

  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x !== y) {
      parents[x] = y;
    }
  }

  let answer = "";
  nodes.forEach(([type, a, b]) => {
    if (type === 0) union(a, b);
    else answer += find(a) === find(b) ? "YES\n" : "NO\n";
  });

  console.log(answer);
}