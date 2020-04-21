const isLeapYear= (year) => {
  if (year % 4 !== 0){
    return 'No! The year ' + year + ' is not a leap year!'
  }
  else if (year % 100 !==0){
    return "Yes! The year " + year + ' is a leap year!'
  }
  else if (year % 100 ===0){
    if (year % 400 ===0){
      return 'Yes! The year ' + year +' is a leap year!'
    }
    else {return 'No! The year '+ year + ' is not a leap year'}
  }
}

const generateRandomYear= () => {
  let year=[]
  while (year.length <4){
    let number=Math.floor(Math.random()*10);
    year.push(number)
  }
      return year.join('');
}
console.log(generateRandomYear())

const generate100Years= () => {
  let years=[]
  for (let i=0; i <100; i++)
    {years.push(generateRandomYear())}
  return years;
}
const OneHundredYears=generate100Years().map(Number)

const answers=OneHundredYears.map(isLeapYear);
console.log(answers);
