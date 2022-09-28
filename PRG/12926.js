
function solution(s, n) {
    let answer = [];
    let input = s.split('');
    for(let i = 0; i < input.length; i++) {
      if (input[i]===' '){
        answer.push(' ');
      } else {
        //입력값 아스키코드로
        let ascii = input[i].charCodeAt();
        //A~Z 65~90, a~z 97~122
        //대문자로 바꿔준 다음 n을 더해주었을 때 만약 90보다 크다면, 다시 알파벳의 시작인 앞부분으로 돌아가야한다는 것이므로 26을 빼준다.
        answer.push(input[i].toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(ascii+n-26) : String.fromCharCode(ascii+n));
        }
    }
    return answer.join('');
}


// 다른 사람 풀이
function solution(s, n) {
   return s.split('').map((el)=> {
        if (el === ' '){
            return ' ';
        }
        let ascii = el.charCodeAt();
        return el.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(ascii+n-26) : String.fromCharCode(ascii+n)
    }).join('');
}
