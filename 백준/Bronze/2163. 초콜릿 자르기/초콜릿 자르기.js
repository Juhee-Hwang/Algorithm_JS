const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((x)=>(+x));
console.log(a*b-1);