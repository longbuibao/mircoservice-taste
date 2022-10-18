const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const isPathBfs = (graph, start, end) => {
  const q = [start];
  while (q.length > 0) {
    const current = q.shift();
    if (current === end) {
      return q;
    }
    q.push(...graph[current]);
  }
  return false;
};

const isPathDfs = (graph, start, end) => {
  const stack = [start];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === end) return true;
    stack.push(...graph[current]);
  }
  return false;
};

console.log(isPathDfs(graph, 'f', 'j'));
console.log(isPathBfs(graph, 'f', 'j'));
