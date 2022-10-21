let [size,...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
size = +size;
let board = arr.map((v)=>v.split(' ').map(v=>+v));
let answer = [0,0,0];

// 재귀 시작
function paper(y,x,n){
  // 첫번째로 비교할 요소값 (가장 첫항)
  let first = board[y][x];
  let isSame = true;

  // 반복문을 돌며 행렬의 요소가 모두 같은 수인지 확인한다.
  for (let i = y; i < y+n; i++){
    for (let j = x; j < x+n; j++){
      // 만약 행렬의 요소가 첫번째로 비교중인 값과 같지 않다면 isSame이 false
      if(board[i][j] !== first){
        isSame = false;
        break;
      }
    }
    if(!isSame) break;
  }
  // isSame이 true라면 answer배열 속에 값을 추가한다.
  // 비교대상이 -1, 0, 1이기 때문에 +1을 해주어 인덱스로 0,1,2를 사용한다. (어차피 출력도 -1,0,1 순)
  if(isSame){
    answer[first + 1]++;
  } 
  // isSame이 false라면 9분할하고 위 과정을 반복한다.
  else{
    n = n/3;
    for (let i = 0; i <= 2; i++){
      for (let j = 0; j <= 2; j++){
        // 9분할 한 다음 재귀식 호출
        paper(y+n*j, x+n*i, n);
      }
    }
  }
}
paper(0,0,size)
console.log(answer.join('\n'));
