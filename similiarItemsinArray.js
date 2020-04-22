


const findDuplicates= (array1,array2) => {
    const newArray= array1.filter(item => array2.includes(item))
    return newArray
  }
  
  
  
  const list1 = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  const list2 = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  console.log(findDuplicates(list1, list2))