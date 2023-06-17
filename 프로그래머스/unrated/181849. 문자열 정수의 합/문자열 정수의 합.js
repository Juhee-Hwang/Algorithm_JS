function solution(num_str) {
    const answer = num_str.split('').map(Number).reduce((a,b) => a+b);
    return answer;
}