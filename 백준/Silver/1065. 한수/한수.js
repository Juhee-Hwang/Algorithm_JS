let input = require('fs').readFileSync('/dev/stdin');

let result = [];

function getDifference (n,i) {
  n = n.toString().split('').map(Number);
  let dif = (n[i+1]-n[i]);
  return dif
}


for (let i =1; i<=input; i++) {
  if (i<100) {
    result.push(i);
  } 
  else if(i>=100){
    let difList = [];
    for (let j = 0; j<i.toString().length-1; j++){
      difList.push(getDifference(i,j));
    } 
    if([...new Set(difList)].length===1) {
      result.push(i);
    };
  }
}

console.log(result.length);