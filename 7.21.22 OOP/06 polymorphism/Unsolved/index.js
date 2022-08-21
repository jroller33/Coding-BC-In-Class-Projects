//                ************  done

// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed Ex. 95 => 'A'
    if (typeof input === 'number') {
      if (90 <= input <= 100) {         // you can also use helper fn inRange
        response = 'A'
      } else if (80 <= input < 90) {
        response = 'B'
      } else if (70 <= input < 80) {
        response = 'C'
      } else if (60 <= input < 70) {
        response = 'D'
      } else if (0 <= input < 60) {
        response = 'F'
      }      
      return response;
    }
    // Return a range if a letter grade was passed Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      if (input === 'A') {
        response = '90-100'
      } else if (input === 'B') {
        response = '80-89'
      } else if (input === 'C') {
        response = '70-79'
      } else if (input === 'D') {
        response = '60-69'
      } else if (input === 'F') {
        response = '0-59'
      }           
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
