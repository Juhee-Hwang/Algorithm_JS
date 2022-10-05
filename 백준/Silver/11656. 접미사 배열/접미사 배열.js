const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = [];
for (let i = 0; i<input.length; i++){
  arr.push(input.slice(i));
}
arr.sort();
console.log(arr.join('\n').trim());