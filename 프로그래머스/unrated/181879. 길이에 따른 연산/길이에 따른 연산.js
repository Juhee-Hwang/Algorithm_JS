function solution(num_list) {
    let answer = num_list.length > 10 ? num_list.reduce((a,b) => a + b) : num_list.reduce((a,b) => a*b);
    return answer;
}