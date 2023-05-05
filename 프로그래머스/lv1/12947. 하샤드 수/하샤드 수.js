function solution(x) {
    let answer = true;
    const xStr = x.toString().split('').map(Number);
    const sumX = xStr.reduce((a,b) => a+b, 0);
    if (x % sumX !== 0) answer = false
    return answer;
}