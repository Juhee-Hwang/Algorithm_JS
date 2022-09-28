// 내 풀이
function solution(n)
{   
    // 각 자리수를 문자로 split하고 Number해준 다음 더해준다
    n = n.toString().split('');
    let answer = 0;
    for (let i = 0; i < n.length; i++){
        answer += Number(n[i]);
    }
    console.log(answer)
    return answer;
}

// 다른 사람 풀이
// function solution(n)
// {
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }