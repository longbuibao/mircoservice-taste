const undirectedGraph = (edges, nodeA, nodeB) => {
  const graph = buildAdj(edges);
  console.log(graph);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visted) => {
  const q = [src];

  while (q.length > 0) {
    const current = q.shift();
    if (!visted.has(current)) {
      q.push(...graph[current]);
      visted.add(current);
    }
    if (current === dst) return true;
  }

  return false;
};

const hasPathDFS = (graph, src, dst, visted) => {
  const stack = [src];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!visted.has(current)) {
      visted.add(current);
      stack.push(...graph[current]);
    }
    if (current === dst) return true;
  }
  return false;
};

const buildAdj = (edges) => {
  return edges.reduce((res, cur) => {
    const [a, b] = cur;
    if (!(a in res)) res[a] = [];
    if (!(b in res)) res[b] = [];
    res[a].push(b);
    res[b].push(a);
    return res;
  }, {});
};

console.log(
  undirectedGraph(
    [
      ['i', 'j'],
      ['k', 'i'],
      ['m', 'k'],
      ['k', 'l'],
      ['o', 'n'],
    ],
    'j',
    'm'
  )
);
