function solution(num_list) {
    const minusNum = num_list.filter((x) => x<0)[0];
    let answer = num_list.indexOf(minusNum)
    return answer;
}