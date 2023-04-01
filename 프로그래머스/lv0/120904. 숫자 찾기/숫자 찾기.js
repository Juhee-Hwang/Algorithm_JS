function solution(num, k) {
    let answer = 0;
    const numStr = num.toString().split('');
    answer = numStr.findIndex(element => +element === k);
    answer < 0 ? answer = -1 : answer += 1;
    return answer;
}