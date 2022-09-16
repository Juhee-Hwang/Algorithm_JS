const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);

function recursion(s, l, r, c) {
  if (l>=r) return `1 ${c}`
  else if (s[l] !== s[r]) return `0 ${c}`
  else return recursion(s, l+1, r-1, c+1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length-1, 1);
}

for (let i = 1; i <= t; i++) {
  console.log(isPalindrome(input[i]));
}
