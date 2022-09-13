function solution(numbers, hand) {
    function findKey(key) {
  let keypad = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (keypad[i][j] === key) {
        return [i,j];
      }
    }
  }
}

let answer = '';
let locationL = '*';
let locationR = '#';

for (let i = 0 ; i < numbers.length; i++) {
  if (numbers[i]===1 || numbers[i]===4 || numbers[i]===7) {
    answer += "L"
    locationL = numbers[i];
  } else if (numbers[i]===3 || numbers[i]===6 || numbers[i]===9) {
    answer += "R";
    locationR = numbers[i];
  } else {
    let l = findKey(locationL);
    let r = findKey(locationR);
    let mid = findKey(numbers[i]);

    let rightDistance = Math.abs(r[0]-mid[0]) + Math.abs(r[1]-mid[1]);
    let leftDistance = Math.abs(l[0]-mid[0]) + Math.abs(l[1]-mid[1]);
    if (leftDistance===rightDistance) {
      hand === 'right' ? (locationR = numbers[i], answer += "R") : (locationL = numbers[i], answer += "L");
    } else if(leftDistance>rightDistance) {
      answer += "R";
      locationR = numbers[i];
    } else  {
      answer += "L";
      locationL = numbers[i];
    }
  }
}
    return answer;
}