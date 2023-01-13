let input = require('fs').readFileSync('/dev/stdin').toString().trim();;
let fibo = [0, 1];

for (let i = 2; i <= Number(input); i++) {
	fibo.push(fibo[i - 1] + fibo[i - 2]);
}

console.log(fibo[Number(input)]);