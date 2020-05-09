//binary search function that returns the index at which the findMe number is at

const sortedArray=[1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

let findMe=11;

const binarySearch= (arr,target) => {
  let min=0;
  let max=arr.length;
  let pivot;

  while (min <= max){
    //each cycle pivot gets cut in half
    pivot = Math.floor(min + (max-min)/2);
  if (arr[pivot] === target){
    return pivot
    } 
  if (target > arr[pivot]) {
    min = pivot + 1 
  } 
  if ( target < arr[pivot]){
     max = pivot -1
    }
  }
  return -1
}
console.log(binarySearch(sortedArray,findMe));


