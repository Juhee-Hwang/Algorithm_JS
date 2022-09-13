const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let wordList = [];

for (let i = 1; i<=n; i++) {
  wordList.push(input[i].toString());
}
wordList = [...new Set(wordList)];

wordList.sort(function(a, b) {
  return a.length - b.length ||
         a.localeCompare(b);    
});

const result = wordList.join('\n');
console.log(result);