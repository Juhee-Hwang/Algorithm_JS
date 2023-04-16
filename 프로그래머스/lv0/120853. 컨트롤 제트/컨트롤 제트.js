function solution(s) {
    s = s.split(' ');
    let arr = [];
    s.forEach((x) => {
        x === 'Z' ? arr.length ? arr.pop() : '' : arr.push(x);
    })
    return arr.reduce ((a,b) => a+ +b, 0)
}