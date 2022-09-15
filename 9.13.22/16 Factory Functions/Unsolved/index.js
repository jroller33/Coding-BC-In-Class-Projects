function student(name, gradeYear) {
  let studentInfo = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    greet: function () {
      console.log(
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
      );
    },
  };
}

const newStudent = student('Dominique', '11th');
newStudent.greet();

module.exports = student;
