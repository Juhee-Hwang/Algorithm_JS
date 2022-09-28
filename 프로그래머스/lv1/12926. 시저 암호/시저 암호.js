function solution(s, n) {
    let answer = [];
    let input = s.split('');
    for(let i = 0; i < input.length; i++) {
      if (input[i]===' '){
        answer.push(' ');
      } else {
        let ascii = input[i].charCodeAt();
        answer.push(input[i].toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(ascii+n-26) : String.fromCharCode(ascii+n));
        }
    }
    return answer.join('');
}

