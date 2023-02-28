function solution(hp) {
    let answer = 0;
    let hunt = hp;    
    while (hunt >= 0)
    if(hunt >= 5) {
        answer += Math.floor(hunt/5);
        hunt = hunt % 5;
    } else if(hunt < 5 && hunt >=3) {
        answer += Math.floor(hunt/3);
        hunt = hunt % 3;
    } else {
        answer += Math.floor(hunt)
        hunt = hunt % 3;
        break
    }
    
    
    return answer;
}