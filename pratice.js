const landVeh = ['car','truck','jeep'];
const waterVeh = ['boat', 'kayak', 'paddleboard'];

const vehicles = [...landVeh,...waterVeh];

const landVehPlueOne = [...landVeh, 'gocart'];

const objOne = {color:'blue', height:12}
const objTwo = {material:'ceramic', width:6};

const objOneTwo = {...objOne,objTwo};

const newObjOne = {...objOne, height:8};

console.log(newObjOne);