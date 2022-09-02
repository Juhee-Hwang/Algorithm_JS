let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let str = '';	

// 알파벳 아스키코드 활용
for (let i = 97; i <= 122; i++) {    
  str = str + input.search(String.fromCharCode(i)) + " " ;
}

console.log(str);
