function solution(n) {
    let answer = [];
    for (let i = 1; i <= (parseInt(n/2)+1); i++) {
        if(n % i === 0) {
            answer.push(i, n/i)
        }
    }
    const uniq = array => [...new Set(array)];
    answer = uniq(answer);
    answer.sort((a,b) => a-b)
    return answer;
}