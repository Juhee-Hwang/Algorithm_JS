const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  // 답안 작성
  let x = input[0];
  let y = input[1];
  let result = 0;

  if (x>0 && y>0) {
    result = 1;
  } else if (x<0 && y>0) {
    result = 2;
  } else if (x<0 && y<0) {
    result = 3;
  } else if (x>0 && y<0) {
    result = 4;
  } 

  console.log(result);

  process.exit();
});

