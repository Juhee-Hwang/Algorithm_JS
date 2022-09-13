const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const memberList = [];

for (let i = 1; i<=n; i++) {
  memberList.push(input[i].toString());
}

memberList.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log( memberList.join('\n'));