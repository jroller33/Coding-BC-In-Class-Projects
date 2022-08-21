// done: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  var message = 'How are you?';

  if (name.length > 0) {
    var newMessage = 'Hello ' + name;
    console.log(newMessage);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// done: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  const callout = 'Outside of the loop';
  var counter = 5;

  while (counter > 0) {
    let callout = 'Inside the loop';  // you can use 'let' to reuse variable inside another block
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// done: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
