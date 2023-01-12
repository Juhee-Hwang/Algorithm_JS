let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map((x) => x.split(' ').map(Number));

let max = 0;
let y = 0;
let x = 0;

for (let i = 0; i < 9; i++){
  for (let j = 0; j < 9; j++){
    if (max < input[i][j]) {
      max = input[i][j];
      y = i;
      x = j;
    }
  }
}

console.log(max);
console.log(`${y+1} ${x+1}`);