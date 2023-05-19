function calculate (num1, operator, num2){
    let a = BigInt(num1)
    let b = BigInt(num2)
    if (operator === "+") return a + b
    else return a - b
}

function solution(my_string) {
    let arr = my_string.split(' ');
    let answer = arr[0];
    console.log(answer)
    for (let i = 1; i < arr.length; i+= 2){
        answer = calculate(answer, arr[i], +arr[i+1])
    }
    
    return answer;
}

// 연산할 숫자가 3개 이상일 경우가 없다.
// function solution(my_string) {
//     let [num1, operator, num2] = my_string.split(' ');
//     num1 = BigInt(num1)
//     num2 = BigInt(num2)
//     let answer = 0;
    
//     operator === "+" ? answer = num1 + num2 : answer = num1 - num2
    
//     return answer;
// }