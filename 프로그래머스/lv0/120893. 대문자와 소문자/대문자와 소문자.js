function solution(my_string) {
    let answer = '';
    let stringArr = my_string.split('');
    
    stringArr.forEach((x) => {
        if(x === x.toUpperCase()){
    		answer += x.toLowerCase();
    	} else answer += x.toUpperCase();
    })
    
    return answer;
}
