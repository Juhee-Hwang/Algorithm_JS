const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1);

const edges = Array.from({ length: N + 1 }, (_v) => []);

for (let i = 0; i < M; i++) {
  const [a, b] = arr[i].split(' ').map(Number);
  edges[a].push(b);
  edges[b].push(a);
}

const dist = new Array(N + 1).fill(-1);

function bfs(start) {
  const queue = [];
  queue.push(start);
  dist[start] += 1;

  let head = 0;
  while (queue.length > head) {
    const cur = queue[head++];

    for (let i = 0; i < edges[cur].length; i++) {
      const next = edges[cur][i];

      if (dist[next] > -1) continue;

      queue.push(next);
      dist[next] = dist[cur] + 1;
    }
  }
}

bfs(1);

const max = Math.max(...dist);
const list = [];

for (let i = 0; i < dist.length; i++) {
  if (dist[i] !== max) continue;
  list.push(i);
}
list.sort((a, b) => a - b);

console.log(`${list[0]} ${max} ${list.length}`);