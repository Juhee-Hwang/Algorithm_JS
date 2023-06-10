function solution(my_str, n) {
    let answer = [];
    let cnt = 0;

    for(let i=0; i < my_str.length/n; i++){
        answer.push(my_str.substr(cnt,n));
        cnt = cnt + n;
    }
    
    return answer;
}