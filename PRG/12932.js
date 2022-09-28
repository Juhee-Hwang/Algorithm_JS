function solution(n) {
    n = n.toString().split('').map(Number);
    let answer = [];
    for (let i = 0; i < n.length; i++) {
        // 뒤에 인덱스부터 돌 수 있도록 length에서 i 빼기
        answer.push(n[n.length-i-1]);
    }
    return answer;
}