const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const xList = input[1].split(' ').map(Number);
// set으로 중복제거하고 sort로 정렬
const sortedXList = [...new Set(xList)].sort((a,b) => a-b);;
const result = [];
const obj = {};
// 정렬한 배열의 각 요소를 key로, 인덱스 값을 value로 하는 객체 생성
sortedXList.forEach((item,idx)=>obj[item] = idx);
//xList 배열의 요소를 key값으로 가지고 있는 obj의 value값을 결과값에 추가
for (let i = 0; i< n; i++) {
  result.push(obj[xList[i]]);
}
console.log(result.join(' '));


// 시행착오들

// 1) 이렇게 하면 중복값이 엄청 많을때 답이 나오지 않음
// const input = require('fs').readFileSync('example.txt').toString().split('\n');
// const n = Number(input[0]);
// const xList = input[1].toString().split(' ').map(Number);
// const sortedXList = input[1].toString().split(' ').map(Number);
// sortedXList.sort((a,b) => a-b);
// let result = [];
// for (let i = 0; i< n; i++) {
//   result.push(sortedXList.indexOf(xList[i]));
// }
// console.log(result.join(' '));


// 2) 반복문 돌면서 비교대상보다 작은 값이 있을 때 count+1 해줘도 위에처럼 나옴

// 3) 이렇게 하면 결과는 제대로 나오는데 메모리 초과 뜸
// const input = require('fs').readFileSync('example.txt').toString().split('\n');
// const n = Number(input[0]);
// const xList = input[1].toString().split(' ').map(Number);
// let result = [];
// for (let i = 0; i<n; i++) {
//   let count = [];
//   for (let j = 0; j<n; j++){
//     if (xList[i]>xList[j]){
//       count.push(xList[i]-xList[j]);
//     }
//   }
//   result.push([...new Set(count)].length);
// }
// console.log(result.join(' '));

// 4) 3번과 동일 (메모리 초과)
// const input = require('fs').readFileSync('example.txt').toString().split('\n');
// const n = Number(input[0]);
// const xList = input[1].toString().split(' ').map(Number);
// const sortedXList = input[1].toString().split(' ').map(Number);
// sortedXList.sort((a,b) => a-b);
// let result = [];
// for (let i = 0; i< n; i++) {
//   result.push([...new Set(sortedXList)].indexOf(xList[i]));
// }
// console.log(result.join(' '));

// 시간초과가 뜨는 이유는 indexOf때문!!!!!!