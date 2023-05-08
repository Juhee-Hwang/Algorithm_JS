const [N, M, B, ...land] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);
// split(/\s+/) : 공백이 1개 이상인 경우를 구분자로 인식

let minTime = Number.MAX_VALUE;
// Number.MAX_VALUE : 자바스크립트에서 가장 큰 수
let maxHeight = 0;
const heights = Array(257).fill(0);
land.forEach((v) => heights[v]++);
// 어떤 높이의 블록이 몇개 있는지 heights 배열에 저장

for (let target = 256; target >= 0; target--) {
  let blockInventory = B;
  let time = 0;
  // 변수 초기화
  heights.forEach((count, height) => {
    blockInventory += (height - target) * count;
    // height보다 target이 높으면 그 차이만큼 필요한 블록을 blockInventory에서 빼서 사용
    // height보다 target이 낮으면 그 차이만큼 블록을 제거해서 blockInventory에 추가
    if (target > height) {
      time += (target - height) * count;
      // 타겟높이가 현재 블록의 높이보다 높으면, 블록을 쌓아야 하므로 블록 쌓는데 걸리는 시간(1초) 추가
    } else {
      time += (height - target) * 2 * count;
      // 타겟높이가 현재 블록의 높이보다 낮으면, 블록을 제거해야 하므로 블록 제거하는데 걸리는 시간(2초) 추가
    }
  });
  if (time > minTime) break;
  // 타겟 높이를 낮추다보면 특정높이부터는 높이를 낮출수록 반드시 작업 시간이 증가한다.
  // 왜? 높이를 낮추면서 블록을 제거하는데 시간이 더 소요되기 때문에
  // 불필요한 반복을 줄이려면 최초 1회를 제외하고 작업시간이 이전시간보다 증가하면 반복문을 탈출하자!
  if (blockInventory < 0) continue;
  // blockInventory가 음수면.. 그 목표 높이는 애초에 못하는거니까..다음 타겟높이 탐색 ㄱㄱ
  if (time < minTime) {
    // 작업시간이 이전시간보다 작으면 갱신
    minTime = time;
    maxHeight = target;
  }
}
console.log(minTime, maxHeight);