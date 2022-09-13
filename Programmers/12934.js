function solution(n) {
    let answer = -1;
    // 제곱근 한 수가 정수라면 제곱수
    if (Number.isInteger(Math.sqrt(n))) {
        answer = (Math.sqrt(n) + 1)**2;
    } 
    return answer;
}