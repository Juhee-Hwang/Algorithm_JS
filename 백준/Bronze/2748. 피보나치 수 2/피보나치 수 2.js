const input = Number(require('fs').readFileSync('/dev/stdin').toString());

const DP = [0,1];

for (let i = 1; i<input; i++){
  DP[i+1] = BigInt(DP[i])+BigInt(DP[i-1]);
}
console.log(DP[input].toString());