//실행 단축키 ctrl + alt + n

// 한 줄에 공백으로 값이 들어올 때 -> 공백으로 split한 문자들이 array 형태로 들어온다. parseInt로 하나하나 분리한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// 한 줄에 하나씩 값이 들어올 때 -> 개행문자'\n'로 split한다.
// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let input = require('fs').readFileSync('example.txt').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);