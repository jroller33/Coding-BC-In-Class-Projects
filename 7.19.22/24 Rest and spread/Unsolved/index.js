//                  ***************** finished

// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// spread operator
const newSongs = [...songs];

// elements in songs will be printed to console
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // reduces the array down to one value (adds them up)
  return array.reduce((a, b) => a + b, 0);
};
// output: 6
console.log(addition(1, 2, 3));

// spread operator as argument in function
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// output: 6
console.log(additionSpread(1, 2, 3));

// output: 110
console.log(additionSpread(1, 2, 3, 4, 100));
