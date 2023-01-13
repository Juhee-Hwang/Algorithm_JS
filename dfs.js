const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    console.log(node + "노드를 탐색하겠다.");
    if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visited.push(node); 
      console.log(`⭐️${node}노드에 처음 방문했다!`);
      // 탐색해야 할 노드에 방문한 노드에 연결되어 있는 노드들과 기존에 있던 탐색해야 할 노드들을 담아준다.
      needVisit = [...graph[node], ...needVisit];
      console.log([...needVisit]+"를 탐색해야 한다!");
    } console.log(node+"노드는 이미 봤다.");
  }
  console.log("더 탐색할 노드가 없다.");
  return visited;
};

console.log(DFS(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]