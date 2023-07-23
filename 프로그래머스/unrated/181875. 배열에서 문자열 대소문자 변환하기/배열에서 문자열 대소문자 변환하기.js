function solution(strArr) {
    let answer = [];
    strArr.forEach((str,idx) => {
        idx % 2 == 0 ? answer.push(str.toLowerCase()) : answer.push(str.toUpperCase())
    })
    return answer;
}