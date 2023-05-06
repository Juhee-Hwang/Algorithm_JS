function solution(price, money, count) {
    let answer = -1;
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) {
        totalPrice += (i * price)
    }
    totalPrice > money ? answer = totalPrice - money :  answer = 0;
    return answer;
}