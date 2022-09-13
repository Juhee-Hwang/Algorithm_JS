function solution(n) {
    let answer = -1;
    if (Number.isInteger(Math.sqrt(n))) {
        answer = (Math.sqrt(n) + 1)**2;
    } 
    return answer;
}