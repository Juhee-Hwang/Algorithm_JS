let input = require('fs').readFileSync('/dev/stdin');

input = parseInt(input);

for (let i=1; i<=9; i++){
  console.log(`${input} * ${i} = ${input*i}`);
}