const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n] = input.shift().split(" ").map(Number);
const strInput = input.map((i) => i.trim());
const list = strInput.slice(0, n);
const candidate = strInput.slice(n);
const set = new Set(list);

let answer = 0;
candidate.forEach((str) => {
  if (set.has(str)) ++answer;
});

console.log(answer);