let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let information = input[0].split(' ').map(Number);
let n = information[0];
let x = information[1];
let result =[];
let listA = input[1].split(' ').map(Number);


for (let i=0; i<n; i++) {
  if(x > listA[i]){
    result = result + listA[i] + " ";
  }
}

console.log(result);

