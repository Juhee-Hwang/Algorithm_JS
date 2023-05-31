function solution(num_list) {
    let answer = 0;
    num_list.reduce((a,b) => a*b) < num_list.reduce((a,b)=> a+b)**2 ? answer = 1 : answer = 0;
    return answer;
}