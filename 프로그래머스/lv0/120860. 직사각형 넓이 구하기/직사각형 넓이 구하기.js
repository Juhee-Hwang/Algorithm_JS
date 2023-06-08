function solution(dots) {
    let answer = 0;
    let x = Math.abs(dots[0][0] - dots[1][0]);
    let y = Math.abs(dots[0][1] - dots[1][1]);
    x === 0 ? x = Math.abs(dots[1][0] - dots[2][0]) : y = Math.abs(dots[1][1] - dots[2][1]);
    answer = x * y
    return answer;
}