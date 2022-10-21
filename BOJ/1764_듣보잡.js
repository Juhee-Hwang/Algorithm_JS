const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function findDuplicates(arr) {
    const distinct = new Set(arr);        // 성능 향상을 위해
    const filtered = arr.filter(item => {
        // 맨 처음 만날 때 집합에서 요소를 제거
        if (distinct.has(item)) {
            distinct.delete(item);
        }
        // 후속 만남에서 요소를 반환
        else {
            return item;
        }
    });
 
    return [...new Set(filtered)]
}
const result = findDuplicates(input.slice(1)).sort();

console.log(result.length);
console.log(result.join('\n'));