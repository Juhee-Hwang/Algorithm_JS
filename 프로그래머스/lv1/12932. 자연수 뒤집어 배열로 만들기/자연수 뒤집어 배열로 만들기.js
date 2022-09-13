function solution(n) {
    n = n.toString().split('').map(Number);
    let answer = [];
    for (let i = 0; i < n.length; i++) {
        answer.push(n[n.length-i-1]);
    }
    return answer;
}