function solution(my_string) {
    let answer = my_string.replace(/a/g, '').replace(/e/g, '').replace(/i/g, '').replace(/o/g, '').replace(/u/g, '');
    return answer;
}