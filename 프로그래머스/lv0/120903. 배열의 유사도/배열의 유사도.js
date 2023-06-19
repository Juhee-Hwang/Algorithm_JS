function solution(s1, s2) {
    let answer = 0;
    s1.forEach((el) => {
        s2.indexOf(el) >= 0 ? answer += 1 : ""
    })
    return answer;
}