const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [has, need] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort();
let max = Math.max(...lines);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let piece = lines.map((line) => parseInt(line / mid)).reduce((a, b) => a + b, 0);
  piece >= need ? min = mid + 1 : max = mid - 1;
}

console.log(max);



// 첫 문제 해석? 

// 필요한 개수 11개
// 내가 갖고 있는 랜선 중 제일 짧은 랜선에 맞추어서 짜른다고 생각해보자
// 457가 제일 짧고.. 그러면... 그거의 절반쯤인 220 해볼까? 
// 아니 안되겟다.
// 그러면 200으로 다 쪼개볼까? 오키.. 풀렸다

// 다른 예시에 적용하기 위해선 어떻게 적용해?
// 내가 가진 라인 중에서 제일 긴 랜선을 최대한 여러번 쪼개야 함.
// 그래서 큰 랜선을 쪼개는 길이?를 조절해가면서 가장 최소로 쪼갤 수 있는 곳까지 찾아가는.. 방법..
// 위에 예시에서는 필요한 랜선 개수와 가진 랜선 개수가 많지 않아서 금방 찾은 것 같은데.. 어떤 규칙이 없으까..?

// 결국 답지 봄
// 최소 (1) + 랜선 최대 길이 (max)를 더하고 평균을 내어 내가 자르고자 하는 랜선 길이의 기준값?(mid) 도출
// 이 값으로 랜선을 자르면 몇개가 나오는지 세어본다
// 랜선의 개수가 원하는 만큼보다 조금 크게 나오면 max에 mid 빼기 1을 할당
// 최대 랜선 길이를 구하는 문제니까 max 출력

// 근데 왜 min, max에 mid+-1 하는지는 모르겠다..!