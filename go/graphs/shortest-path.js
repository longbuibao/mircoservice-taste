const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildAdj(edges);
  console.log(graph);
  return bfs(graph, nodeA, nodeB, new Set());
};

const bfs = (graph, src, dst, visited) => {
  const q = [{ src, dis: 0 }];

  while (q.length > 0) {
    const { src, dis } = q.shift();
    if (src === dst) return dis;

    if (!visited.has(src)) {
      const node = { src, dis: 1 };
      visited.add(node.src);
      const toPush = graph[src].reduce((res, cur) => {
        res.push({ src: cur, dis: dis + 1 });
        return res;
      }, []);
      q.push(...toPush);
    }
  }
  return -1;
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
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f'],
];
console.log(shortestPath(edges, 'b', 'g')); // -> 2
