function solution(numbers) {
    let sum = numbers.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    
    let aver = sum / numbers.length;
    return aver;
}