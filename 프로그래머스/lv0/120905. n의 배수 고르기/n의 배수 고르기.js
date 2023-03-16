function solution(n, numlist) {
    let answer = [];
    numlist.forEach((x) => x%n===0 ? answer.push(x) : "")
    return answer;
}