let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);


// 알파벳 아스키코드 활용
for (let i = 1; i <=n; i++) {
  let result = '';	
  let str = input[i].split(' ');
  let repeat = str[0];
  str = str[1];
  for (let j = 0; j < str.length; j++) {
    result = result + str[j].repeat(repeat);
  } 
  console.log(result);
}
