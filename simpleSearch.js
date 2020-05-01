let array=[1,2,3,4,5,6,7,8,9]

const findNumberinArray = (arr,n)=> {
  for (let i=0; i < arr.length; i++){
    if (arr[i] === n){
      return i;
    }
  }
  return -1;
}

console.log(findNumberinArray(array,12));
console.log(findNumberinArray(array,4));
