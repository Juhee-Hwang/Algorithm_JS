const solution = (queue1, queue2) => {
    // 큐의 합
    let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
    let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
    // 큐 합의 반 (최종적으로 만들고자 하는 값)
    const half = (sum1 + sum2) / 2;
    // 두 큐를 합친다
    const q = [...queue1, ...queue2];
    // 포인터 초기화
    // q1Pointer는 q 배열에서 queue1의 시작 위치를 가리키고, q2Pointer는 queue2의 시작 위치를 가리킨다.
    let q1Pointer = 0;
    let q2Pointer = queue1.length;

    // 최대 반복횟수 큐1 길이 * 3 만큼 반복
    for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
        // 만약 sum1이 half와 같다면, cnt를 반환하고 함수 종료
        if (sum1 === half) {
            return cnt;
        }
        //  sum1이 half보다 크다면, sum1에서 q 배열의 q1Pointer 위치의 값을 빼고 q1Pointer를 증가
        // 그렇지 않다면, sum1에 q 배열의 q2Pointer 위치의 값을 더하고 q2Pointer를 증가시킵니다.
        sum1 =
        sum1 > half
            ? sum1 - q[q1Pointer++ % q.length]
            : sum1 + q[q2Pointer++ % q.length];
    }
    
    return -1;
};