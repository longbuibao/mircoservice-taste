const largestComponent = (graph) => {
  // todo
  const result = [];
  const visited = new Set();
  for (let node in graph) {
    result.push(bfs(graph, node, visited));
  }
  return Math.max(...result);
};

const bfs = (graph, src, visited) => {
  if (visited.has(src)) return 0;
  let count = 0;
  const q = [src];

  while (q.length > 0) {
    const current = q.shift();
    if (!visited.has(current)) {
      count++;
      visited.add(current);
      q.push(...graph[current]);
    }
  }

  return count;
};

console.log(
  largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2'],
  })
);
