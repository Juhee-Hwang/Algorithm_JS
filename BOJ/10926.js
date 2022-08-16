// 아이디 뒤에 공백이나 개행문자가 들어가는 경우 제거해주고 ??!를 붙여준다!
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input+"??!");