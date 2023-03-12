function solution(sides) {
    sides.sort((a,b) => a-b);
    let long = sides[2];
    let short1 = sides[0];
    let short2 = sides[1];

    let answer = 0;
    
    long < short1 + short2 ? answer += 1 : answer += 2;
    return answer;
}