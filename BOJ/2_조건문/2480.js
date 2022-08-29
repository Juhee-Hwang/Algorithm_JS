let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number).sort();

let one = input[0];
let two = input[1];
let three = input[2];
let prize =  0;

if (one===two && two===three) {
  prize = 10000 + one * 1000;
} else if (one!==two && two!==three && three!==one){
  prize = three * 100;
} else {
  prize = 1000 + two * 100;
}

console.log(prize);