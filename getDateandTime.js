function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


const getDateAndTime = () => {
    let d=new Date()
    let today= d.getDay()
    let hours=addZero(d.getHours())
    let minutes=addZero(d.getMinutes())
    let seconds= addZero(d.getSeconds())
    let isPM= 'PM'
    if (!hours > 12){
        isPM= 'AM'
    }
    if (hours > 12){
     hours=hours-12
    }
    let days={
      0:'Sunday',
      1:'Monday',
      2:'Tuesday',
      3:'Wednesday',
      4:'Thursday',
      5:'Friday',
      6:'Saturday',
      7:'Sunday'
    };
    return "Today is " + days[today] + " and the current time is " + hours + ":" + minutes + ":" + seconds + isPM
  
  }
  
  console.log(getDateAndTime())


