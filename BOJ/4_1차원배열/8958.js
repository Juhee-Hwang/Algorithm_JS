let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let n = input[0];

for (let i = 1; i<=n; i++) {
  let answer = input[i].split('');
  let score = [];
  for (let j = 0; j< answer.length; j++) {
    if (answer[j] === "O") {
      if (j===0) {
        score.push(1);
      } else if (j>0){
        score.push(score[j-1]+1);
      }
    } else if (answer[j] === "X") {
      score.push(0);
    } 
  } console.log(score.reduce((a,b) => a+ b, 0));
}