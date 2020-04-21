const numberGuesser= (userNum) => {
    let computerGuess = Math.ceil(Math.random()*10)
    if (userNum > 10){
      return 'Please input a number between 1-10'
    }
    else if (userNum === computerGuess){
      return 'Congrats your number ' + 'was the same number as the computer guess: ' + computerGuess
    }
    else { return 'Sorry your guess was ' +userNum + ' and the computer guess was '+ computerGuess}
  }
  console.log(numberGuesser(5))


  