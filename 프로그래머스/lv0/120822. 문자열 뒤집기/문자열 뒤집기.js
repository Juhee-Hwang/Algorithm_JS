function solution(my_string) {
    const strArr = my_string.split('');
    let answer = '';

    for (let i = strArr.length-1; i >= 0; i--){
        answer += strArr[i]
    }
    return answer;
}