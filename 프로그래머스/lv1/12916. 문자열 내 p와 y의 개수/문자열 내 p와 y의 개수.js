function solution(s){
    let answer = true;
    const str = s.toLowerCase()
    const countP = str.split('p')
    const countY = str.split('y')
    if (countP.length !== countY.length) answer = false;
    return answer;
}