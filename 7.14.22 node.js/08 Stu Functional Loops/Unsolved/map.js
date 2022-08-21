const originalArray = [1, 3, 2, 5, 10];

// done: doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // done: The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log('doubled array:\n', doubledArray);
console.log('original array:\n', originalArray);


// done: map is taking the original array and tripling each value
const tripledArray = originalArray.map(data => data * 3);
console.log('tripled array:\n', tripledArray)

// done: the value of oddOrEven will be whether or not the num is even or odd.
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
console.log('oddOrEven: \n', oddOrEven);
