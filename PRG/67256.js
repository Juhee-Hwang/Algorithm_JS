function solution(numbers, hand) {
  // 키패드에서 위치를 찾아주는 함수
  function findKey(key) {
    // 2차원 배열로 키패드 위치 나타냄
    let keypad = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        // 반복문을 돌면서 입력받은 키값이 배열의 어떤 위치에 있는 요소와 값이 동일한지 찾아 배열 인덱스 반환
        if (keypad[i][j] === key) {
          return [i,j];}
      }
    }
  }

  // 변수 초기화
  let answer = '';
  let locationL = '*';
  let locationR = '#';

  for (let i = 0 ; i < numbers.length; i++) {
    // 왼쪽에 있는 애들 무조건 왼손, 그리고 왼손의 위치값에 해당 키 할당
    if (numbers[i]===1 || numbers[i]===4 || numbers[i]===7) {
      answer += "L"
      locationL = numbers[i];
    } 
    // 오른쪽에 있는 애들 무조건 오른손, 그리고 오른손의 위치값에 해당 키 할당
    else if (numbers[i]===3 || numbers[i]===6 || numbers[i]===9) {
      answer += "R";
      locationR = numbers[i];
    } 
    // 가운데에 있는 키
    else {
      // 왼손과 오른손 위치, 그리고 입력해야하는 가운데 줄 키 위치 변수에 할당
      let l = findKey(locationL);
      let r = findKey(locationR);
      let mid = findKey(numbers[i]);

      // 가로, 세로 떨어져있는 거리 구하기
      let rightDistance = Math.abs(r[0]-mid[0]) + Math.abs(r[1]-mid[1]);
      let leftDistance = Math.abs(l[0]-mid[0]) + Math.abs(l[1]-mid[1]);
      // 만약 두개의 거리가 같다면 오른잡이일 떄 오른손, 왼손잡이일 때 왼손
      if (leftDistance===rightDistance) {
        hand === 'right' ? (locationR = numbers[i], answer += "R") : (locationL = numbers[i], answer += "L");
      } 
      // 왼손 거리가 더 크면 오른손, 오른손 위치값에 해당 키 할당
      else if(leftDistance>rightDistance) {
        answer += "R";
        locationR = numbers[i];
      } 
      // 오른손 거리가 더 크면 왼손, 왼손 위치값에 해당 키 할당
      else  {
        answer += "L";
        locationL = numbers[i];
      }
    }
  }
  return answer;
}