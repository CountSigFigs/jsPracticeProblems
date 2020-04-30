//hackerrank problem


function gradingStudents(grades) {
    let roundedGrades=[];
    for (let i=0; i < grades.length; i++){
      let num= grades[i]
      if (num < 38){
        roundedGrades.push(num);
      } else {
      let roundNum=Math.ceil(num/5)*5;
      if (roundNum -num < 3 ){
        roundedGrades.push(roundNum);
      } else {
        roundedGrades.push(num);
        }
      }
    }
    return roundedGrades;
  }
  