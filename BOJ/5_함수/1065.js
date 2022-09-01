
let input = require('fs').readFileSync('/dev/stdin');
let answer = 0;

function getDifference (n,i) {
  n = n.toString().split('').map(Number);
  let dif = (n[i+1]-n[i]);
  return dif
}

for (let i =1; i<=input; i++) {
  if (i<100) {
    answer += 1;
  } 
  else if(i>=100){
    let difList = [];
    for (let j = 0; j<i.toString().length-1; j++){
      difList.push(getDifference(i,j));
    } 
    if([...new Set(difList)].length===1) {
    answer += 1;
    };
  }
}

console.log(a);