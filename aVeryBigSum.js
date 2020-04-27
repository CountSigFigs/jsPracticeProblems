array=[5, 10000, 1005, 156];

function aVeryBigSum(ar) {
    let num=0;
    for (let i=0; i <ar.length; i ++){
    num += ar[i]
  }
  return num;
}

console.log(aVeryBigSum(array));

