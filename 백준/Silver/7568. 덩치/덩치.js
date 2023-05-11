const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const classmates = arr.map((el) => el.split(" ").map(Number));
let answer = [];

classmates.forEach((classmate) => {
  let ranking = 1;
  // 다른 학생들과 비교
  for (let i = 0; i < +N; i++) {
    if (classmate[0] < classmates[i][0] && classmate[1] < classmates[i][1]) {
      ranking++;
    }
  }
  answer.push(ranking);
  // console.log(classmate, ranking);
});
console.log(...answer);
