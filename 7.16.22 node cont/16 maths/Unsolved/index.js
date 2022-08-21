// done: Import `maths.js`
// const { difference, quotient } = require('./maths');
const maths = require('./maths');

// done: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = process.argv[3];
const numTwo = process.argv[4];

// done: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) {
    case "sum":
        console.log(maths.sum(parseInt(numOne), parseInt(numTwo)));
        break;
    case "difference":
        console.log(maths.difference(parseInt(numOne), parseInt(numTwo)));
        break;
    case "product":
        console.log(maths.product(parseInt(numOne), parseInt(numTwo)));
        break;
    case "quotient":
        console.log(maths.quotient(parseInt(numOne), parseInt(numTwo)));
        break;
    default:
        console.log('syntax is "node index.js" then <operation> <numOne> <numTwo>');
    }

    // if (operation === "sum") {
    //     console.log(maths.sum(numOne, numTwo))
    // } 
    // else if (operation === "difference") {
    //     console.log(maths.difference(numOne, numTwo))
    // } 
    // else if (operation === "product") {
    //     console.log(maths.product(numOne, numTwo))
    
    // } else if (operation === "quotient") {
    //     console.log(maths.quotient(numOne, numTwo))
    
    // } else {
    //     console.log("enter sum diff");
    // }
    