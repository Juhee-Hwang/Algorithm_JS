function solution(array, n) {
    const minDiffArr = array.map((x) => (Math.abs(x-n)))
    // const minDiffIdx = minDiffArr.indexOf(Math.min(...minDiffArr));
    
    let answer = 0;
    let idxArr = [];
    const minDiffNum = Math.min(...minDiffArr);
    minDiffArr.forEach((el,idx) => {
        if(el === minDiffNum){
            idxArr.push(idx)
        }
    })
    
    if (idxArr.length === 1) {
        answer = array[idxArr[0]];
    } else {
        answer = Math.max(...array);
        idxArr.forEach((index) => {
            array[index] < answer ? answer = array[index] : "";
        })
    }
    
    return answer;
}