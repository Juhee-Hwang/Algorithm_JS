const input = require('fs').readFileSync('/dev/stdin');
let answer = [];
for (let i =1; i<=input; i++){
    answer.push(i);
}
console.log(answer.join('\n'))