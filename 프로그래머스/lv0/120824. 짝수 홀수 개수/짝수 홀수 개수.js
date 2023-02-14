function solution(num_list) {
    let answer = [];
    let odd = 0;
    let even = 0;
    num_list.forEach((x) => {
        x%2 === 0 ? even += 1 : odd += 1
    })
    answer.push(even, odd)
    return answer;
}