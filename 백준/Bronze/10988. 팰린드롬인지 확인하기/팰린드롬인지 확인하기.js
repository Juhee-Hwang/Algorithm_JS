const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let str =  input
let isPalindrome = true
for (let j = 0; j<=parseInt(str.length/2); j++){
  if(str[j] !== str[str.length-j-1]) {
    isPalindrome = false
    break;
  } 
}
if(isPalindrome){
  console.log(1);
} else {
  console.log(0);
}