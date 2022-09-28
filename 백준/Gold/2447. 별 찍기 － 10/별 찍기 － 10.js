let input = Number(require('fs').readFileSync('/dev/stdin'));
let pattern='';

function printStar(i,j){
  if(i%3 === 1 && j%3 === 1){
    pattern +=' ';
  } else {
    if(Math.floor(i/3) === 0 && Math.floor(j/3 === 0)){
      pattern += '*';
    } else {
      printStar(Math.floor(i/3),Math.floor(j/3));
    }
  }
}

for(let i = 0; i < input; i++) {
  for(let j = 0; j < input; j++) {
    printStar(i,j);
  }
  if (i !== input-1){
    pattern += "\n";
  }
}

console.log(pattern);