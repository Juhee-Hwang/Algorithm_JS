let nonselfNum = [];

for (let i = 1; i<=10000; i++) {
  let a = i.toString().split('').map(Number);
  findingSelfNum = i + a.reduce((a, b) => a + b, 0);
  nonselfNum.push(findingSelfNum);
}

let findSelfNum = [...Array(10000).keys()].map(key => key + 1);
let selfNum = findSelfNum.filter(x => !nonselfNum.includes(x))

selfNum.forEach(function(selfNum,index,array){
  console.log(selfNum);
})