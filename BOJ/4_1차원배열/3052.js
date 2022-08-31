let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

let result =[];

for (let i =0; i<input.length; i++) {
  result.push(parseInt(input[i])%42);
}

console.log([...new Set(result)].length);