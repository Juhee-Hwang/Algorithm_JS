const getElNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);

function solution(array) {
  let answer = 0;

  array.forEach((num) => {
    let x = num.toString().split("");
    if (x.includes("7")) {
      answer += getElNum(x, "7");
    }
  });
  return answer;
}

// 다른 사람 풀이인데, 심플하고 좋아서 나도 이 생각해서 가져옴
function solution(array) {
  return array.join("").split("7").length - 1;
}
