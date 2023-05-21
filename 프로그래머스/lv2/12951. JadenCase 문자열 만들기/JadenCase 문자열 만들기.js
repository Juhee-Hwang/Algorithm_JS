function solution(s) {
    
    // 1트에서 실패한 부분 (런타임 에러)
    // let answer = '';
    // const splitStr = s.toLowerCase().split(' ').map((x) => x[0].toUpperCase(0));
    
    // 2트
    const answer = s.toLowerCase().split(" ").map((v) => v.charAt(0).toUpperCase() + v.substring(1)).join(" ");
    return answer;
}