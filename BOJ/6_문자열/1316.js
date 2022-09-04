let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseCount = parseInt(input[0]);
let countGroupWord = 0;

for (let i=1; i<=caseCount; i++) {
  // 변수 초기화
  let word = input[i];
  // 처음 발견된 알파벳을 넣는 배열
  let letter = [];
  let isGroupWord = true;
  
  for (let j=0; j<word.length; j++) {
    // 만약 탐색한 알파벳이 letter 배열에 없을 경우
    if(letter.indexOf(word[j]) === -1) {
      // letter배열에 추가해준다
      letter.push(word[j]);
    } else { // 만약 탐색한 알파벳이 letter 배열에 있을 경우
      // 그런데 letter배열의 마지막에 있지 않을 경우
      if(letter.indexOf(word[j])!== letter.length-1) {
        // 그룹단어가 아니다
        isGroupWord = false;
        break;
      }
    }
  }

  // 만약 위에 있는 조건문에 걸리지 않는다면, 그룹단어의 개수에 1을 더해준다
  if (isGroupWord) {
    countGroupWord += 1;
  }
}

console.log(countGroupWord);