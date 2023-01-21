function rank(value, arr) {
	let sorted = arr.slice().sort(function(a,b){return b-a});
	let rank = sorted.indexOf(value);
	if(rank > -1) return rank+1;
	return null;
}

function solution(emergency) {
    let answer = [];
    
    emergency.forEach((n) => answer.push(rank(n,emergency)))
    return answer;
}