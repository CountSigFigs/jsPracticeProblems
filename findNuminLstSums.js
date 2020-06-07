//daily coding problem question. 

//Given a list of numbers and a number k:
//return whether any two numbers from the list add up to k.

const list = [10,15,3,7];
const n = 34

const findSum =(lst,num) => {
  for (let i=0; i < lst.length; i++){
    for (let j= i + 1; j < lst.length; j ++){
      let sum = lst[i] + lst[j]
      if (sum === n){
        return true;
      }
    }
  }
  return false;
}

console.log(findSum(list,n))

