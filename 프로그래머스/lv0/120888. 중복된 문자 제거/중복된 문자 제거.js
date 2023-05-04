function solution(my_string) {
    let answer = my_string.split('');
    const uniq = array => [...new Set(array)];
    answer = uniq(answer)
    return answer.join('')
}