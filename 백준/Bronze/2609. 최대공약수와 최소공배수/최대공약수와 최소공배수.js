const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((x)=>+x);
let i = a;
let j = b;
//유클리드호제법으로 최대공약수 구하기
while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
        i = j;
        j = n;
    }
}
console.log(j)
// a,b 곱 최대공약수로 나누면 최소공배수
console.log(a*b/j)