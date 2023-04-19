const getElNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);

function solution(array) {
    let answer = 0;
    
    array.forEach((num) => {
        let x = num.toString().split('')
        if (x.includes('7')) {
            answer += getElNum(x,'7');
        }
    })
    return answer;
}


