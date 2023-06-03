function solution(my_string, index_list) {
    let answer = '';
    index_list.forEach((x) => {
        answer += my_string[x]
    })
    return answer;
}