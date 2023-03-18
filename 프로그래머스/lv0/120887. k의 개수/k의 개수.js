function solution(i, j, k) {
    let answer = 0;
    
    for (let a = i; a <= j; a++){
        let arr = a.toString().split('');
        arr.forEach((num) => {+num === k ? answer += 1 : ""})
    }
    return answer;
}