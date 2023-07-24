function solution(a, b) {
    let aStr = a.toString()
    let bStr = b.toString()
    const answer = aStr + bStr > bStr + aStr ?  aStr + bStr : bStr + aStr  ;
    return +answer;
}