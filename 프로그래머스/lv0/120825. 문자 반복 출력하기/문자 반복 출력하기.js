function solution(my_string, n) {
    let answer = '';
    const str = my_string.split('')
    str.forEach((x) => answer += x.repeat(n))
    return answer;
}