const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const croatia = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(croatia,'#');
console.log(result.length);