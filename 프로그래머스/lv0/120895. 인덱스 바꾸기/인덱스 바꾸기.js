String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length); 
}
 

function solution(my_string, num1, num2) {
    let answer = my_string;
    const str1 = my_string[num1];
    const str2 = my_string[num2];
    
    answer = answer.replaceAt(num1, str2);
    answer = answer.replaceAt(num2, str1)
    return answer
}