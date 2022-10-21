const input = Number(require('fs').readFileSync('/dev/stdin'));
let answer = [];
for (let i = input; i>=1; i--){
  answer.push(i);
}
console.log(answer.join('\n'));