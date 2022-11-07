const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = "";

for (let i = 0; i < input[0].length; i++) {
	let alpha = input[0][i];
	let torf = true;
	for (let j = 0; j < input.length; j++) {
		if (alpha !== input[j][i]) {
			torf = false;
			break;
		}
	}
	if (torf) result += alpha;
	else result += "?";
}

console.log(result);