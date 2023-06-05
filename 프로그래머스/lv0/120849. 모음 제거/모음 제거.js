function solution(my_string) {
  // 1트 성공 but 맘에 안듬
  // let answer = my_string.replace(/a/g, '').replace(/e/g, '').replace(/i/g, '').replace(/o/g, '').replace(/u/g, '');

  // 2트 정규표현식 사용하여 표현하기
  const answer = my_string.replace(/[aeiou]/g, "");
  return answer;
}
