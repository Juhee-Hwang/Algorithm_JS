let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


let c = parseInt(input[0]);
// let scores = input[1].split(' ').map(Number);

for (let i = 1; i <= c; i++){
  let result = [];
  let overAvg = 0;
  let scores = input[i].split(' ').map(Number);
  for (let j = 1; j<=scores[0]; j++) {
    result.push(scores[j]);
  }
  const sum = result.reduce((a, b) => a + b, 0);
  const avg = (sum / scores[0]) || 0;
  for (let k = 0; k<scores[0]; k++){
    if (result[k]>avg) {
      overAvg = overAvg+1;
    }
  }
  let a = overAvg/scores[0]*100;
  console.log(`${a.toFixed(3)}%`);
}