function solution(numbers) {
    let answer, front, back = 0;
    // let front = 0;
    // let back = 0;
    let numArr = numbers.map((x) => +x);
    numaArr = numArr.sort((a,b)=> a-b);
    
    front = numArr[0] * numArr[1];
    back = numArr[numArr.length-1] * numArr[numArr.length-2];
    
    front < back ? answer = back : answer = front;
    return answer;
}