function solution(s) {
  let numberList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i<=9; i++){
    let replaceString = numberList[i];
    let regexAllCase = new RegExp(replaceString, "gi");
    // 숫자 영단어를 찾아 숫자로 변경
    s = s.replace(regexAllCase, i);
  }
  let answer = Number(s);
  return answer;
}