function solution(a, b) {
    const day = new Date(2016, a-1, b);
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 
    const answer = WEEKDAY[day.getDay()];
    return answer;
}