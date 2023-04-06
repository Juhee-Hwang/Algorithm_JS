function solution(arr, divisor) {
    let answer = [];
    arr.forEach((x) => {
        x % divisor === 0 ? answer.push(x) : "";
    })
    answer.sort((a,b) => a-b)
    answer.length === 0 ? answer.push(-1) : "";
    return answer;
}