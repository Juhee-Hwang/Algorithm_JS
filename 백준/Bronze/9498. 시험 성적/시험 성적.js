const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const score = +input;
let result = '';

if (score >= 90) {
  result = "A";
} else if (score >= 80) {
  result = "B";
} else if (score >= 70) {
  result = "C";
} else if (score >= 60) {
  result = "D";
} else {
  result = "F";
}

console.log(result);