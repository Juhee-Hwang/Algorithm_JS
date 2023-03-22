function solution(order) {
    let answer = 0;
    const orderArr = order.toString().split('');
    orderArr.forEach((num)=>{
        if(num==='3' || num==='6' || num==='9'){
            answer += 1
        }
    })
    return answer;
}