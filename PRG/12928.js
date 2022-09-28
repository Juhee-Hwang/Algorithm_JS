function solution(n) {
    let answer = 0;
    // 나머지가 0이면 약수
    for (let i = 1; i<=n; i++){
        if(n%i===0){
            answer += i;
        }
    }
    
    return answer;
}