function solution(slice, n) {
    let answer = 0;
    n % slice === 0? answer += Math.floor(n / slice) : answer += Math.floor(n / slice) + 1
    
    return answer;
}