numbers = [1, 3, 3, 4, 4, 1, 32, 4, 8, 4, 2, 8]


function countDuplicate(numbers) {
    let dups=[];

    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j <numbers.length; j++ ){
          if (numbers[i] === numbers[j]){
            if (!dups.includes(numbers[i])){
              dups.push(numbers[i])
            }
          }
        }
    }
    return(dups.length)
}


console.log(countDuplicate(numbers))