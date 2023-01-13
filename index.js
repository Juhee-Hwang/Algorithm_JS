//실행 단축키 ctrl + alt(option) _n

const { count } = require('console');
const { get } = require('http');

// const { func, element } = require('prop-types');

// 한 줄에 공백으로 값이 들어올 때 -> 공백으로 split한 문자들이 array 형태로 들어온다. parseInt로 하나하나 분리한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// 한 줄에 하나씩 값이 들어올 때 -> 개행문자'\n'로 split한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//.map(Number)해주면 parseInt안해도 돼!!!!!!!
// let input = require('fs').readFileSync('example.txt').toString().split(' ').map(Number);
// let input = require('fs').readFileSync('example.txt').toString().split('\n').map(Number);
// const [n,...arr] = require('fs').readFileSync('example.txt').toString().trim().split('\n');


let input = require('fs').readFileSync('example.txt').toString().trim().split("\n").map((x) => x.split(' ').map(Number));

let max = 0;
let y = 0;
let x = 0;

for (let i = 0; i < 9; i++){
  for (let j = 0; j < 9; j++){
    if (max < input[i][j]) {
      max = input[i][j];
      y = i;
      x = j;
    }
  }
}

console.log(max);
console.log(`${y+1} ${x+1}`);


arr.forEach((firstNum, firstIdx) => {
  firstNum.forEach((secondNum, secondIdx) => {
    if (firstIdx === 0 && secondIdx === 0) {
      max = secondNum;
      x = firstIdx;
      y = secondIdx;
    }
    
    if (secondNum > max) {
      max = secondNum;
      x =  firstIdx;
      y = secondIdx;
    }
  })
})

console.log(max);
console.log(`${x+1} ${y+1}`);