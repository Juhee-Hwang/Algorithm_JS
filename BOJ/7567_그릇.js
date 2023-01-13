let input = require('fs').readFileSync('example.txt').toString().trim().split('');
let cm = 10;
let dish = input.shift();
while (true) {
	if (input[0] === dish) {
		cm += 5;
		input.shift();
	} else {
		cm += 10;
		dish = input.shift();
	}
	if (input.length === 0) break;
}
console.log(cm);