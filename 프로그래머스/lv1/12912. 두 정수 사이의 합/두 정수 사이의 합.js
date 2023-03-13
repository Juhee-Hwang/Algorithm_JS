function solution(a, b) {
    let answer = 0;
    const bigNum = a > b ? a : b;
    const smallNum = a < b ? a : b;
    
    for (let i = smallNum; i<=bigNum; i++){
        answer += i;
    }
    return answer;
}