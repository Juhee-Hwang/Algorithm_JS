function solution(n) {
    let answer = 0;
    const sqrtNum = Math.sqrt(n);
    Number.isInteger(sqrtNum) ? answer = 1 : answer = 2;
    return answer;
}