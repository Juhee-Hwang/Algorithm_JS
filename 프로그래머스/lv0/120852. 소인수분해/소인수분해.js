function solution(n) {
    let answer = [];
    let divider = 2;
    while (n >= 2) {
        if (n % divider === 0) {
            answer.push(divider);
            n = n / divider
        }
        else {
            divider += 1;
        }
    }
    answer = [...new Set(answer)]
    
    return answer;
}