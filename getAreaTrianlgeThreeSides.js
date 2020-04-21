const findAreaOfTriangle= (a,b,c)=>{
    let p= (a + b +c)/2
    let number= p *(p-a) * (p-b) * (p-c)
    let area= Math.sqrt(number)
    return area
  }
  
  console.log(findAreaOfTriangle(5,5,5));
  