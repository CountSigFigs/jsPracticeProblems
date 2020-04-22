//given an array of numbers, the input is a new array of those numbers squared

const numbers = [2, 7, 9, 171, 52, 33, 14]

const squareNums = array => {
  let newArray=array.map(x=>x*x)
  return newArray
}

console.log(squareNums(numbers))

