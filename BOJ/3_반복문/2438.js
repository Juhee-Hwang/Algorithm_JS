let input = require('fs').readFileSync('/dev/stdin').toString();

input = parseInt(input);

for (let i=1; i<=input; i++) {
  console.log("*".repeat(i));
}