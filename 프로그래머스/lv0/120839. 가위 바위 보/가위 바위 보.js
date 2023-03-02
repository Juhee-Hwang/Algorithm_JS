function solution(rsp) {
    let answer = '';
    let arr = rsp.split('').map(Number);
    
    arr.forEach((x)=> {
        if (x===2) answer += '0';
        else if (x===0) answer += '5';
        else answer += '2';
    })
    return answer;
}