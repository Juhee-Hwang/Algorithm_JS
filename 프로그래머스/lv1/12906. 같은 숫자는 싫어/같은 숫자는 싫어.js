function solution(arr)
{
    const answer = [];
    arr.forEach((num, idx) => {
        if (num === arr[idx+1]) true;   
        else answer.push(num);
    })
    return answer;
}