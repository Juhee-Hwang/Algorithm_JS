function calculate(num) {
    
}

function solution(num) {
    let count = 0;
    let number = num;
    
    while (true){
        if (number === 1) break;

        if (number % 2 === 0) {
            number = number / 2;
            count ++;
        } else {
            number = number * 3 + 1;
            count ++;
        }
        
        if (count > 500) {
            count = -1;
            break;
        }
    }
    
    return count;
}