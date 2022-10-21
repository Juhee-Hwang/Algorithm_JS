const [month,day] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
// N월에 며칠인지 배열에 저장
const dates = [0,31,28,31,30,31,30,31,31,30,31,30,31];
const days = [ "SUN","MON","TUE", "WED", "THU", "FRI", "SAT",]
// 입력값의 바로 직전달까지 일수를 다 합치고, 입력값의 일수 만큼 더한다
let countDates = dates.slice(0,month).reduce((a,b)=>a+b)+day;
// 그리고 7로 나누어 요일을 출력한다. (2007년 1월 1일이 월요일이기 때문에 배열의 순서가 위에와 같다.)
console.log(days[countDates%7]);
