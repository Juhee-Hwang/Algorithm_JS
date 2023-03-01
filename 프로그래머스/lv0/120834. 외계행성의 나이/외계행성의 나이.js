function solution(age) {
    let answer = '';
    
    let ageArr = age.toString().split('').map(Number);
    ageArr.forEach((x) => answer += String.fromCharCode([97 + x]));
    
    return answer;
}