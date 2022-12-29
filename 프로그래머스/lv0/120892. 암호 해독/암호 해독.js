function findMultiple(str, num) {
    let result = [];
    str.forEach((s,idx) => (idx+1)%num === 0 ? result.push(idx) : "")
    return result;
}

function solution(cipher, code) {
    let realCodeIdx = findMultiple(cipher.split(''), code)
    let answer = '';
    for (let element of realCodeIdx) {
        answer = answer + cipher[element]
    }
    return answer;
}