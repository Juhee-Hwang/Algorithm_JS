let numberList = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const avg = numberList.reduce((a,b) => a + b) / numberList.length

numberList.sort();
let midIdx = Math.floor(numberList.length / 2);

if(numberList.length % 2 === 0) {
  let mid = (numberList[midIdx] + numberList[midIdx-1]) / 2
} let mid = numberList[midIdx]
console.log(`${avg}\n${mid}`)