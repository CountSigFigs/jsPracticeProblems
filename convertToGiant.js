const convertToGiant= array => {
    let newArray=[]
    let i=0
    while (i < array.length){
      newArray.push('Giant ' + array[i])
      i++
    }
    return newArray
  }
  
  
  const animals = ['sloth','snake','giraffe','turtle','monkey','jaguar'];
  
  console.log(convertToGiant(animals)) 
  
  