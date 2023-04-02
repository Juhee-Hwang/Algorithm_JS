function solution(my_string) {
    const regex = /^[0-9]+$/;

    let ans = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(regex.test(my_string[i])){
            ans.push(Number(my_string[i]));
        }
    }
    
    return ans.sort((a,b) => a - b);
}