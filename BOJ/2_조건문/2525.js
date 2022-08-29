let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let time = input[0];
let min = parseInt(input[1]);

time = time.split(' ').map(Number);

let h = time[0];
let m = time[1];
let result_h = 0;
let result_m = 0;

if ((m+min)>=60) {
  result_m = (m+min)%60;
  result_h = h + parseInt((m+min)/60);
  if (result_h>23){
    result_h = result_h-24;
  }

} else if ((m+min)<60) {
  result_h = h
  result_m = m+min;
} 
console.log(result_h+" "+result_m);