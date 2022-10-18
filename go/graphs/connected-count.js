const connectedComponentsCount = (graph) => {
  // todo
  let count = 0;
  const visted = new Set();
  for (let node in graph) {
    if (countConnectedComponents(graph, +node, visted)) count++;
  }
  return count;
};

const countConnectedComponents = (graph, src, visited) => {
  if (visited.has(src)) return false;
  const q = [src];
  while (q.length > 0) {
    const current = q.shift();
    for (neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(+neighbor);
        q.push(neighbor);
      }
    }
  }
  return true;
};

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
);
