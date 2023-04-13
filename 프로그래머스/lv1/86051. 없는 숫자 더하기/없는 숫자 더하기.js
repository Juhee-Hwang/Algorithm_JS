function solution(numbers) {
    let answer = 45 - numbers.reduce((a,b) => a+b)
    return answer;
}