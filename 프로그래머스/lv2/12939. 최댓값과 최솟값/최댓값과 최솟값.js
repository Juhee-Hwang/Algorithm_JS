function solution(s) {
    const arr = s.split(' ').map(Number);
    const answer = Math.min(...arr) + ' ' + Math.max(...arr);
    return answer;
}