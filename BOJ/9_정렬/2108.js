const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

const n = input[0];
let numList = [];
let result = [];

// 최빈값 찾는 함수
function mode(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++){
    if(!map.has(arr[i])){
      map.set(arr[i],1);
    } else {
      map.set(arr[i],map.get(arr[i])+1);
    }
  }
  
  let maxValue = 0;
  let answer = [];

  map.forEach((element,key) => {
    if (maxValue < element) {
      maxValue = element;
      answer = [];
      answer.push(key);
    } else if(maxValue===map.get(key)) {
      answer.push(key);
    }
  });

  return answer.length !== 1 ? answer[1] : answer[0];
}

for (let i = 1; i <= n; i++) {
  numList.push(input[i]);
}
numList.sort((a,b)=>a-b)

result.push(Math.round(numList.reduce((a,b)=>a+b,0) / numList.length));
result.push(numList[Math.floor(numList.length/2)]);
result.push(mode(numList));
result.push(Math.max(...numList)-Math.min(...numList));

console.log(result.join('\n'));