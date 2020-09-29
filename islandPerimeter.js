/*
Problem Name:
  Island Perimeter
Input:
  [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

 Output:
    16

hint:The perimeter is the 16 yellow stripes in the image below:

Link:
  https://leetcode.com/problems/island-perimeter/

*/


var islandPerimeter = function(grid) {
  let gridLen=grid.length, blockLen=grid[0].length;
  let dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  if(gridLen===0 || blockLen===0) return 0;
  let perimeter=0;
  for(let i=0; i<gridLen; i++){
      for(let j=0; j<blockLen; j++){
          if(grid[i][j]===1){
              for(let d of dirs){
                  console.log(d)
                  let [x,y]=[i+d[0], j+d[1]];
                  if(x<0 || y<0 || x>=gridLen || y>=blockLen || grid[x][y]===0) perimeter+=1;
              }
          }
      }
  }
  return perimeter;
};
islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])