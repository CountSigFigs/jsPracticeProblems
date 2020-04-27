let array=[1,5,6,2,8];

const addSum = arr => {
  let num=0;
  for (let i=0; i < arr.length; i++){
    num += arr[i]
  }
  console.log(num);
}


addSum(array);

