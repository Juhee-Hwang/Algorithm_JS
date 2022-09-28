let input = Number(require('fs').readFileSync('example.txt'));
let pattern='';

function printStar(i,j){
  // 패턴의 중앙 값에 공백이 들어간다
  if(i%3 === 1 && j%3 === 1){
    pattern +=' ';
  } 
  
  else {
    // 공백을 제외한 테두리는 다 *이 들어간다.
    if(Math.floor(i/3) === 0 && Math.floor(j/3 === 0)){
      pattern += '*';
    } 
    // 만약 i가 3을 넘어가게 되면 크기는 커지지만, 원리는 동일하게 가운데는 공백임. 
    // 그렇기 때문에 i를 3으로 나눈 값에서 3으로 나눈 나머지가 1이라면?
    // 가운데 영역을 뜻하는 것이기 때문에 공백으로 처리하면 된다.
    // 이를 위해서 i를 3으로 나눈 값을 다시 printStar 함수에 넣어서 확인한다.
    else {
      printStar(Math.floor(i/3),Math.floor(j/3));
    }
  }
}

// 출력값의 첫행부터 가로로 출력
for(let i = 0; i < input; i++) {
  for(let j = 0; j < input; j++) {
    printStar(i,j);
  }
  // 만약 마지막 줄이 아니라면, 한 행의 출력이 끝났을 때 개행문자를 붙여준다. 
  if (i !== input-1){
    pattern += "\n";
  }
}

console.log(pattern);