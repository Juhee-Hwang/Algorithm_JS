// 메모리초과 :)
const input = require('fs').readFileSync('example.txt').toString().split(' ').map((x)=>+x);
let n = 0;
while(true){
  if (
    n % 15 === input[0] &&
    n % 28 === input[1] &&
    n % 19 === input[2]
  ) {
    console.log(n);
    break;
  }
  n++;
}


// 문제는 readline으로 풀어야 했다는 것...근데도 안돼... nodejs로는 풀 수 없는 것 같음...
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line)=>{
  const [E,S,M] = line.split(' ').map(x=>+x);
  let n = 1;
  while(1){
    if((n-E)%15==0 && (n-S)%28==0 && (n-M)%19==0){
      console.log(n)
        process.exit();
    }else{
      n++;
    }
  }
});