const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer =[];
for(let i = 1; i<=input[0]; i++){
    let [a,b] = input[i].split(',').map((x)=>(+x));
    answer.push(a+b);
}

console.log(answer.join('\n'));