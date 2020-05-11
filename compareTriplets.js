//hackerrank code problem that calculates the absolute difference between cross diagnol pairs

a=[5,6,7]
b=[3,6,10]

function compareTriplets(a, b) {
    let score=[0,0]
      if (a[0] > b[0]){
        score[0] += 1;
      } else if (b[0] > a[0]) {
        score[1] +=1
      } 
      if (a[1] > b[1]){
        score[0] += 1
      } else if (b[1] > a[1]) {
        score[1] +=1
      }
      
      if ( a[2] > b[2]){
        score[0] += 1
      } else if (b[2] > a[2]) {
        score[1] +=1
      } 
      return score
    }