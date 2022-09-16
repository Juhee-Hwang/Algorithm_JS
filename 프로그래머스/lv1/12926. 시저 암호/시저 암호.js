function solution(s, n) {
    let answer = [];
    let input = s.split('');
    //A~Z 65~90, a~z 97~122
    for(let i = 0; i < input.length; i++) {
      if (input[i]===' '){
        answer.push(' ');
      } else {
        let ascii = input[i].charCodeAt();
        answer.push(input[i].toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(ascii+n-26) : String.fromCharCode(ascii+n));
        }
    }

    return answer.join('');
    
   // return s.split('').map((el)=> {
   //      if (el === ' '){
   //          return ' ';
   //      }
   //      let ascii = el.charCodeAt();
   //      return el.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(ascii+n-26) : String.fromCharCode(ascii+n)
   //  }).join('');
}

