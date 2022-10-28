const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N,M,V] = input[0].split(' ').map((x)=>+x);
let graph = new Array(N+1);
for (let i = 0; i < graph.length; i++){
  graph[i] = [];
}
for (let j = 0; j < M; j++){
  let [from,to] = input[j+1].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((element) => {
  element.sort((a,b)=>a-b);
});

const DFS = (graph, startNode) => {
  const visited = [];
  let needVisit = []; 

  needVisit.push(startNode); 

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node); 
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

const BFS = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) { 
    const node = needVisit.shift() 
    if (!visited.includes(node)) {
      visited.push(node); 
      needVisit = [...needVisit, ...graph[node]];
    } 
  }
  return visited;
};


console.log(DFS(graph,V).join(" "));
console.log(BFS(graph,V).join(" "));