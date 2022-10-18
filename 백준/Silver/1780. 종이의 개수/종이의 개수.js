let [size,...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
size = +size;
let board = arr.map((v)=>v.split(' ').map(v=>+v));
let answer = [0,0,0];

function paper(y,x,n){
  let first = board[y][x];
  let isSame = true;


  for (let i = y; i < y+n; i++){
    for (let j = x; j < x+n; j++){
      if(board[i][j] !== first){
        isSame = false;
        break;
      }
    }
    // isSame이 false 즉, 하나라도 같지 않으면 반복문 탈출
    if(!isSame) break;
  }
  if(isSame){
    answer[first + 1]++;
  } else{
    n = n/3;
    for (let i = 0; i <= 2; i++){
      for (let j = 0; j <= 2; j++){
        paper(y+n*j, x+n*i, n);
      }
    }
  }
}

paper(0,0,size)

console.log(answer.join('\n'));