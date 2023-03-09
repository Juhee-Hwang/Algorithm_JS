function solution(array, height) {
    let answer = 0;
    array.forEach((x) => {
        height < x ? answer += 1 : "";
    })
    return answer;
}