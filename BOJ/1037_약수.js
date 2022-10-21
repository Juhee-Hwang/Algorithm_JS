let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]);
let numList = input[1].split(' ').map(Number);
numList.sort((a,b)=> a-b);

if (count===1){
  console.log(numList[0]**2);
}
else {
  console.log(numList[0]*numList[numList.length-1]);
}