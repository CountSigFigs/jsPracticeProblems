const reverseString= (string)=> {
    let array=string.split('')
    let reverseArray=[];
    for(let i=array.length-1; i>=0; i--){
      reverseArray.push(array[i])
    }
    return reverseArray.join('')
  }
  
  console.log(reverseString('Thisismyreversewordprogram'));
  