let [n,...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n;
let board = arr.map((v)=>v.split('').map(v=>+v));
let answer = [];

// 재귀 시작
function recursion(n,x,y){
  let total = 0;
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      total += board[y+j][x+i];
    }
  } 
  if (total === 0) {
    answer.push(0);
  } else if (total === n*n) {
    answer.push(1);
  }
  else {
    n = n/2;
    answer.push("(");
    recursion(n,x,y);
    recursion(n,x+n,y);
    recursion(n,x,y+n);
    recursion(n,x+n,y+n);
    answer.push(")");
  }
}

recursion(n,0,0)
console.log(answer.join(''));