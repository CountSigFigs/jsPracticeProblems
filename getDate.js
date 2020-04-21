const getDate = () => {
  let today= new Date ()
  let month= today.getMonth() + 1
  let day= today.getDate()
  let year= today.getFullYear()
  return month + '-' + day +'-' + year
}
console.log(getDate())