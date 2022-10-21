let input = Number(require('fs').readFileSync('/dev/stdin'));
let count = 0;
let answer = [];

function hanoi (n, from, other, to) {
  if (n===0) {
    return;
  }
  else {
    hanoi(n-1, from, to, other);
    answer.push([from,to]);
    count++;
    hanoi(n-1, other, from, to);
}

  }

hanoi(input,1,2,3);
console.log(count);
console.log(answer.map((el)=>el.join(" ")).join("\n"));