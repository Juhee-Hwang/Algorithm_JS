// 1트
// function solution(s) {
//     let answer = false;
//     if (s.length === 4 || s.length === 6) {
//         if (s.indexOf('e') >= 0) {
//             return answer
//         } else {
//             let check = parseInt(s)
//             answer = s.length === check.toString().length
//         }
//     }
//     return answer;
// }


function solution(s){
    let answer = false;
    if (s.length === 4 || s.length === 6){
        answer = s.split('').every(c => !isNaN(c)) // 모든 요소가 number면 true
    }
    return answer;
}
