let input = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase().split('');

let str = [];	

// 알파벳 아스키코드 활용하여, 알파벳이 나온 횟수 집계
for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i)
  str.push(input.filter(word => word === alphabet).length);
}

// 가장 많은 횟수 변수search에 할당
let search = Math.max(...str);
let searchResult = [];
// 가장 많이 나온 알파벳의 순서 변수index에 할당
let index = str.indexOf(search);

// 가장 많이 나온 알파벳이 하나인지 확인하기 위한 조건문
while (index != -1) {
    // 위에서 추가해주었던 알파벳의 인덱스 값을 searchResult배열에 추가
    searchResult.push(index);
    // 앞에서 넣어준 알파벳의 뒤에 있는 인덱스 중에서 가장 많은 횟수만큼 나온 알파벳이 또 있는지 확인
    // 여기서 index가 -1이면 더 없다는 것이니까 반복문 종료됨
    index = str.indexOf(search, index + 1);
}

// 만약 결과값이 1보다 크다면 많이 나온 알파벳이 2개 이상이니까, ?출력
if (searchResult.length > 1) {
  console.log ('?');
} else {
  // 그렇지 않다면 알파벳의 인덱스 값에 65를 더해주어 아스키코드 -> 문자로 변환하여 출력
  console.log(String.fromCharCode(parseInt([...searchResult])+65));
}