const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 100; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 100));
}

console.log('\nPre Sort:\n', unsortedInputArray.join(' '), '\n');

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {  // for each index in array...

    for (let j = 0; j < array.length; j++) {  // ...loop thru entire array once
      
      if (array[j] > array[j + 1]) {    // when we reach the end of the array
        const temp = array[j];          // swap array[j] and array[j+1]
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:\n', sorted.join(' '), '\n');
console.log('DONE!\n');
