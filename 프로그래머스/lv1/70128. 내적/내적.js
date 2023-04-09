function multiple (a,b,n) {
    return a * b[n]
}

function solution(a, b) {
    let answer = 0;
    
    a.forEach((x,idx) => {
        answer += multiple(x,b,idx)
    })
    
    return answer;
}