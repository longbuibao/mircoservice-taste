const islandCount = (grid) => {
  // todo
  let count = 0;
  const visted = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      count++;
      bfs(grid, i, j, visted);
    }
  }
  return count;
};

const bfs = (grid, i, j, visted) => {
  const node = grid[i][j];
  visted.add({ i, j });
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  if (node === 'L') {
    const q = [node];

    while (q.length > 0) {
      if (!visted.has(grid)) {
      }
    }
  }
};
