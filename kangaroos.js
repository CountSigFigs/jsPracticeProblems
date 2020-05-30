//hackerrank problem https://www.hackerrank.com/challenges/kangaroo/problem
const kangarooJump = (x1,v1,x2,v2) => {
    let xDisplacement = x1
    let yDisplacement = x2
    let willMeet=''
    //returns false if first kangaroo starts father and is also faster bc second kangaroo can't catch up
    if (x1 > x2 && v1 > v2) {
        willMeet = 'NO'
        return willMeet;
    }
    //same logic but for second kangaroo
    if (x1 < x2 && v1 < v2) {
        willMeet = 'NO'
        return willMeet;
    }
    //loops through a conter to determine if kangaroos will meet
    for (let i = 0; i < 10000; i++) {
        xDisplacement += v1
        yDisplacement += v2
       if (xDisplacement === yDisplacement){
           willMeet = 'YES'
           return willMeet;
       }
    }
    willMeet = 'NO'
    return willMeet;
}

console.log(kangarooJump(0, 2, 5, 3))