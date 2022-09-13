const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let wordList = [];

for (let i = 1; i<=n; i++) {
  wordList.push(input[i].toString());
}

// 값 중복 제거
wordList = [...new Set(wordList)];

// 길이 순 정렬 후 사전순 정렬
wordList.sort(function(a, b) {
  return a.length - b.length || // sort by length, if equal then
         a.localeCompare(b);    // sort by dictionary order
});

const result = wordList.join('\n');
console.log(result);


// 문자열 길이 오름차순
// wordList.sort((a, b) => a.length - b.length)
// 문자열 길이 내림차순
// wordList.sort((a, b) => b.length - a.length)