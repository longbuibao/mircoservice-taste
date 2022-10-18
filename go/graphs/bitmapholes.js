function BitmapHoles(strArr) {
  // code goes here
  const turnTo2DArray = strArr.map((str) => str.split(''));
  let numOfHoles = 0;
  const rows = turnTo2DArray.length;
  const cols = turnTo2DArray[0].length;

  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) {
      if (turnTo2DArray[i][j] === '0') {
        bfs(turnTo2DArray, rows, cols, i, j);
        numOfHoles++;
      }
    }
  return numOfHoles;
}

const bfs = (matrix, rows, cols, i, j) => {
  const q = [];
  // add this position into the q, but in 1D shape
  // 2D to 1D: current row i * numbers of cols + current column j
  q.push(i * cols + j);
  // change that position to 1
  matrix[i][j] = '1';
  // performing bfs
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (q.length !== 0) {
    // 1D to 2D: Row: index / number of cols, Column: index % number of cols
    const index = q.shift();
    const row = Math.floor(index / cols);
    const column = index % cols;
    for (let i = 0; i < directions.length; i++) {
      const x = directions[i][0] + row;
      const y = directions[i][1] + column;
      if (x > -1 && x < rows && y > -1 && y < cols && matrix[x][y] === '0') {
        matrix[x][y] = '1';
        q.push(x * cols + y);
      }
    }
  }
};

console.log(BitmapHoles(['10111', '10101', '11101', '11111', '00010']));
