let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let costTime = 0;

for (let i = 0; i<input.length; i++) {
  let alphabet = input.charCodeAt(i)
  // 65 === A
  if (alphabet>=65 && alphabet<=67) {
    costTime += 3;
  } else if (alphabet>67&&alphabet<=70) {
    costTime += 4;
  } else if (alphabet>70&&alphabet<=73) {
    costTime += 5;
  } else if (alphabet>73&&alphabet<=76) {
    costTime += 6;
  } else if (alphabet>76&&alphabet<=79) {
    costTime += 7;
  } else if (alphabet>79&&alphabet<=83) {
    costTime += 8;
  } else if (alphabet>83&&alphabet<=86) {
    costTime += 9;
  } else if (alphabet>86&&alphabet<=90) {
    costTime += 10;
  }
}

console.log(costTime);
