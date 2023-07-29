function solution(num_list, n) {
    const answer = num_list.indexOf(n) === -1 ? 0 : 1;
    return answer;
}