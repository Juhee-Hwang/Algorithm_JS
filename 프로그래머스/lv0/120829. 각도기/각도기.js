function solution(angle) {
    let answer = 0;

    if (angle < 90) {
        answer = 1
    } else if (90 === angle) {
        answer = 2
    } else if (90 < angle && angle < 180){
        answer = 3
    } else if (180 === angle){
        answer = 4
    }
    
    return answer;
}