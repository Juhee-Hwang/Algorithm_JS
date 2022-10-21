const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
let answer = [];
while(input[i]!=="0"){
  let str =  input[i]
  let isPalindrome = true
  for (let j = 0; j<=parseInt(str.length/2); j++){
    if(str[j] !== str[str.length-j-1]) {
      isPalindrome = false
      break;
    } 
  }
  if(isPalindrome){
    answer.push('yes');
  } else {
    answer.push('no');
  }
  i++;
}

console.log(answer.join('\n'));