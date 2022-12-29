let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let h = input[0];
let m = input[1];

if (m<45) {
  m = 60-(45-m);
  if (h===0){
    h = 23;
  } else {
    h = h-1;
  }
} else if (m>=45) {
  m = m-45;
} 
console.log(h+" "+m);