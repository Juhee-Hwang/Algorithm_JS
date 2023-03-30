function solution(my_string) {
    let answer = 0;
    my_string.split('').forEach((x)=> {
        Number.isInteger(+x) ? answer = answer + (+x) : ''
    })
    return answer;
}