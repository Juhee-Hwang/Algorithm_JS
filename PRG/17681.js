function solution(n, arr1, arr2) {
  let answer = [];
  for(let i = 0; i < n; i++){
    // 처음 나의 풀이
    // arr1[i] = arr1[i].toString(2).padStart(n,'0');
    // arr2[i] = arr2[i].toString(2).padStart(n,'0');
    // 자바스크립트 비트 연산자 활용
    answer.push((arr1[i]|arr2[i]).toString(2).padStart(n,'0'));
  }
  
  //처음 나의 풀이
  // answer = answer.toString().replaceAll('1','#').replaceAll('0',' ').split(',');
  answer = answer.toString().replaceAll('1','#').replaceAll('0',' ').split(',');
  
  return answer;
}

// 배운 점
// 이진수 앞에 0 채우기 (padding)
  // 방법1
  // let n = 7;
  // const padding = '0'.repeat(n);
  // let result = (padding + n.toString(2)).substr(-padding.length);
  // 방법2
  // let result = n.toString(2).padStart(8, '0');
  // 뒤에서 부터 채울 때는 padEnd

// 이진수 비트 연산
  //10은 이진수로 1010, 12는 이진수로 1100
  //AND연산자 &를 붙이면 각 자리에서 둘 다 1일 경우에 1을 반환하여줌.
  //10&12 
  //결과값은 '1000'의 10진수인 '8'

  //OR연산자 |를 붙이면 각 자리에서 둘 중 하나가 1일 경우에 1을 반환하여줌.
  //10&12 
  //결과값은 '1110'의 10진수인 '14'

  //배타논리연산자 ^를 붙이면 두개의 비트가 같을 경우에 1을 반환하여줌.
  //10^12 
  //결과값은 '1001'의 10진수인 '6'
  
  //부정논리연산자 ~를 붙이면 해당 비트값의 반대 값을 반환하여줌.
  //주의) 비트들의 값을 모두 뒤집어 버리면, 이런식으로 숫자의 음/양이 바뀌어 버린다. 
  //왜냐하면, JS는 비트 단위 연산을 할 경우에 32비트 int를 기준으로 연산을 하기 때문이다. 32비트 int에서는 가장 앞 비트가 -2147483648을 나타냅니다.
  //~18   //18는 이진수로 10010
  //결과값은 '1111 1111 1111 1111 1111 1111 1110 1101'의 10진수인 '-19'
