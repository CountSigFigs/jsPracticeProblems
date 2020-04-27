function plusMinus(arr) {
    let pos=0;
    let neg=0;
    let zero=0;
    for (let i=0; i < arr.length; i++){
      if (arr[i] === 0){
        zero +=1;
      } else if 
        (Math.sign(arr[i]) === 1){
          pos += 1;
        } else {
          neg +=1
        }
    }
    pos = (pos/arr.length).toFixed(6)
    neg= (neg/arr.length).toFixed(6)
    zero= (zero/arr.length).toFixed(6)
    console.log(pos)
    console.log(neg)
    console.log(zero)
  }

  