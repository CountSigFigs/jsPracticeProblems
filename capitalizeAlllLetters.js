function shoutGreetings (array) {
    let newArray=array.map(x => x.toUpperCase() + '!')
    return newArray;
  }
  
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']
  
  console.log(shoutGreetings(greetings))

  