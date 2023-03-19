function solution(array) {
    let answer = [];
    let maxNum = array[0];
    array.forEach((x, idx) => {
        if(maxNum < x){
            maxNum = x;
            answer = [x, idx]
        }
    })
    return answer;
}