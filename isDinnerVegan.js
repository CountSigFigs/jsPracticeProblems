//This function will check an array of objects if the meal is vegan based if every object in the array 
//can pass a test 'veganCheck'

const veganCheck = obj => {
    if (obj.source === 'vegan'){
      return true
    } else {
      return false
    }
  }
  
  const isTheDinnerVegan = array => {
    return array.every(veganCheck)
  }
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  console.log(isTheDinnerVegan(dinner))