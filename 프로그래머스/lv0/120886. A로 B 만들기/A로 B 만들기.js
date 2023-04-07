function solution(before, after) {
    let answer = 0;
    let beforeSort = before.split('').sort().join('');
    let afterSort = after.split('').sort().join('');

    if (beforeSort === afterSort) {
        answer = 1;
    }
    return answer;
}