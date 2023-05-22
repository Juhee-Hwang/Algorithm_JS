function solution(s) {
  // 1트에서 실패한 부분 (런타임 에러)
  // let answer = '';
  // const splitStr = s.toLowerCase().split(' ').map((x) => x[0].toUpperCase() + x.slice(1)).join(' ');

  // 2트
  // v[0].toUpperCase()를 사용하면 시간초과가 발생한다. 그 이유는 v[0]이 빈 문자열일 경우가 있기 때문이다.
  // charAt(0)은 문자열의 첫번째 문자를 반환한다.
  // substring(1)은 문자열의 첫번째 문자를 제외한 나머지 문자열을 반환한다.
  // substring과 slice는 같은 기능을 하지만, slice는 음수 인덱스를 사용할 수 있다.
  // string.slice(beginIndex[, endIndex]) 의 시간복잡도는 O(n)
  // string.substring(beginIndex[, endIndex]) 의 시간복잡도는 O(n)
  const answer = s
    .toLowerCase()
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1))
    .join(" ");
  return answer;
}
