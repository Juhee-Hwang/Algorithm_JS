const input = require('fs').readFileSync('/dev/stdin');
const n = Number(input);
let sugar = [];

for (let i = 0; i<=(n/3); i++) {
  for (let j = 0; j<=(n/5); j++) {
    if (3*i + 5*j === n) {
      sugar.push(i+j);
    }
  }
}

if (sugar.length===0) {
  sugar.push(-1);
}

console.log(Math.min(...sugar));