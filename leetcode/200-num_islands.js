/**
 * @param {character[][]} grid
 * @return {number}
 */

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

var dfs = function(grid, x, y){
  let numRows = grid.length;
  let numColumns = grid[0].length;

  grid[x][y] = 0;

  // check up, right, down and left from [x,y]
  // if it's a 1, then it's part of the same island and send it back to this func
  // 
  if (x > 0 && grid[x - 1][y] === '1') dfs(grid, x - 1, y)
  if (x + 1 > numRows && grid[x + 1][y] === '1') dfs(grid, x + 1, y)
  if (y > 0 && grid[x][y-1] === '1') dfs(grid, x, y-1)
  if (y < numColumns && grid[x][y + 1] === '1') dfs(grid, x, y + 1)
}

var numIslands = function (grid) {
  let islands = 0;

  for (let x=0; x < grid.length; x++){
    for (let y=0; y < grid[0].length; y++){
      if (grid[x][y] === '1'){
        islands++
        dfs(grid, x, y)
      }
    }
  }


  return islands;
};