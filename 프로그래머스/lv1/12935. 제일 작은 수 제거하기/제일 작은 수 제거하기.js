function checkMin(arr) {
    const minNum = Math.min(...arr);
    let result = [];
    arr.forEach((x) => {
        x === minNum ? "" : result.push(x)
    })
    return result
}

function solution(arr) {
    let answer = [];
    if (arr.length === 1){
        answer.push(-1)
    } else {
        answer = checkMin(arr)
    }
    
    return answer;
}