//hackerrank javascript problem from https://www.hackerrank.com/challenges/apple-and-orange/problem


function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let min= s;
    let max= t;
    let appleTree=a;
    let orangeTree=b;
    
    let newAppleArray= apples.map(x => x + appleTree);
    let newOrangeArray= oranges.map(x=> x + orangeTree);
    
    let appleCounter=0;
    let orangeCounter=0;
    
    for (let i=0; i < newAppleArray.length; i++){
      if (newAppleArray[i] >= min && newAppleArray[i] <= max){
        appleCounter+=1;
      }
    }
    for (let i=0; i < newOrangeArray.length; i++){
      if (newOrangeArray[i] >= min && newOrangeArray[i] <= max){
        orangeCounter+=1;
      }
    }
    
    console.log(appleCounter)
    console.log(orangeCounter)
  }
  
  countApplesAndOranges(7,11,5,15, [-2,2,1],[5,-6])