function solution(array, commands) {
    let answer = [];
    commands.forEach((command) => {
        let [i,j,k] = command
        let arr = array.slice(i-1,j)
        arr.sort((a,b) => a-b);
        answer.push(arr[k-1]) 
    })
    return answer;
}