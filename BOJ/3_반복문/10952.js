let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let i = 0;

while (i<input.length){
  let numbers = input[i].split(' ').map(Number);
  if (numbers[0]===0 && numbers[1]===0) {
    break
  }
  console.log(numbers[0]+numbers[1]);
  i++
}