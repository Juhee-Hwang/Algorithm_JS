function solution(n) {
    let answer = [];
    let primeNumber = Array(n+1).fill(true);
    primeNumber[0] = false;
    primeNumber[1] = false;

    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if(primeNumber[i]) {
            let a = 2;
            while (i*a <= n) {
                primeNumber[i*a] =false;
                a++;
            }
        }
    }

    for(let j = 2; j<=n; j++) {
        if(primeNumber[j]) {
            answer.push(j);
        }
    }
    
    return answer.length;
}