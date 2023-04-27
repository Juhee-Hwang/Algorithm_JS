function solution(nums) {
    const monNum = nums.length / 2;
    const uniq = array => [...new Set(array)];
    const uniqNums = uniq(nums);
    let answer = 0;
    
    if (uniqNums.length > monNum) {
        answer += monNum
    } else{
        answer += uniqNums.length
    }
    return answer;
}