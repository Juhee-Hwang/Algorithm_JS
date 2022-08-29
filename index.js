//실행 단축키 ctrl + alt(option) _n

// 한 줄에 공백으로 값이 들어올 때 -> 공백으로 split한 문자들이 array 형태로 들어온다. parseInt로 하나하나 분리한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// 한 줄에 하나씩 값이 들어올 때 -> 개행문자'\n'로 split한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//.map(Number)해주면 parseInt안해도 돼!!!!!!!
// let input = require('fs').readFileSync('example.txt').toString().split(' ').map(Number);
// let input = require('fs').readFileSync('example.txt').toString().split('\n').map(Number);


let input = require('fs').readFileSync('example.txt').toString().split('\n').map(Number);

let x = input[0];
let y = input[1];
let result = 0;

if (x>0 && y>0) {
  result = 1;
} else if (x<0 && y>0) {
  result = 2;
} else if (x<0 && y<0) {
  result = 3;
} else if (x>0 && y<0) {
  result = 4;
} 

console.log(result);
