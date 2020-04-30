array=[[2,2,4],[2,5,6],[7,3,7]]
function diagonalDifference(arr) {
  let dim= arr.length;
  let firstSum=0;
  let secondSum=0;
  let sum=0;
  
  for (let i=0, j=(dim-1); i < dim, j > -1; i++, j--){
    firstSum+= array[i][i];
    secondSum+= array[i][j];
  }
  sum= Math.abs(firstSum - secondSum)
  return sum
}


diagonalDifference(array);