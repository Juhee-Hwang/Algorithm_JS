let input = Number(require('fs').readFileSync('/dev/stdin'));

for (let i = input; i>0; i--){
  console.log(" ".repeat(input-i)+"*".repeat(i));
}