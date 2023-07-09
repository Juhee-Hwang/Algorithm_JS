function solution(number) {
    const numberSum = number.split('').map(Number).reduce((a,b) => a+b);
    const answer = numberSum % 9
    return answer;
}