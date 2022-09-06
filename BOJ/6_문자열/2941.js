const input = require('fs').readFileSync('/dev/stdin').toString().trim();
//크로아티아 알파벳을 바꿔주기 위해 정규식 사용
const croatia = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(croatia,'#');
console.log(result.length);