// 답지 -> sort로 정렬한 뒤 순차적으로 비교했을 때 불일치할 때 미완주 선수 발견
function solution(participant, completion) {
    let answer = '';
    participant.sort()
    completion.sort()
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i]
            break;
        }
    }
    return answer;
}


// 4트 테스트 다 통과 but 시간초과
// function solution(participant, completion) {
//     let answer = '';

//     participant.forEach((runner) => {
//          if(!completion.includes(runner)){
//             answer = runner;
//             return false
//          } else {
//              let removeIdx = completion.findIndex((x) => x === runner);
//              completion[removeIdx] = '';
//          }
//     })
//     return answer;
// }

// 3트 코드 실행 통과 but 일부 테스트 실패 & 시간초과
// function arrayRemove(arr, value) { 
//     return arr.filter(function(ele){ 
//             return ele != value; 
//     });
// }


// function solution(participant, completion) {
//     let answer = '';
//     participant.forEach((runner) => {
//         if(!completion.includes(runner)){
//             answer = runner;
//             return false
//         } else {
//             completion = arrayRemove(completion, runner)
//         } 
//     })
//     return answer;
// }

// 2트 마찬가지로 동명이인때문에 실패 
// + findNoncompletion함수에서 카운트한 사람을 뺀 배열을 출력할 수가 없음.

// function arrayRemove(arr, value) { 
    
//     return arr.filter(function(ele){ 
//             return ele != value; 
//     });
// }

// function findNoncompletion(runner,completion){
//     const result = !completion.includes(runner);
//     completion = arrayRemove(completion, runner);
    
//     return result
// }


// function solution(participant, completion) {    
//     const answer = participant.filter(marathoner => 
//         findNoncompletion(marathoner, completion)
//     );

//     return answer[0];
// }


// 1트 동명이인때문에 실패 ㅠ
// function solution(participant, completion) {    
    
//     const answer = participant.filter(word => !completion.includes(word));

//     return answer[0];
// }