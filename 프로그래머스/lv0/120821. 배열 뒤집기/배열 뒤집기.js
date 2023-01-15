function solution(num_list) {
    let answer = [];
    let repeat = num_list.length
    for (let i = 0; i < repeat; i++){
        let a = num_list.pop()
        answer.push(a)
    }
    return answer;
}