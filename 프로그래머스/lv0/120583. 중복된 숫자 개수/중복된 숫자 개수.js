function solution(array, n) {
    const answer = array.reduce((a,b) => n === b ? a+1 : a, 0)
    return answer;
}
