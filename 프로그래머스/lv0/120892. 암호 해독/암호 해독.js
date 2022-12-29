// function findMultiple(str, num) {
//     let result = [];
//     str.forEach((s,idx) => (idx+1)%num === 0 ? result.push(idx) : "")
//     return result;
// }

// function solution(cipher, code) {
//     let realCodeIdx = findMultiple(cipher.split(''), code)
//     let answer = '';
//     for (let element of realCodeIdx) {
//         answer = answer + cipher[element]
//     }
//     return answer;
// }

function solution(cipher, code) {
    let answer = '';
    for (let i = 0; i < cipher.length; i++){
        (i+1)%code === 0 ? answer = answer + cipher[i] : ""
    }
    return answer;
}