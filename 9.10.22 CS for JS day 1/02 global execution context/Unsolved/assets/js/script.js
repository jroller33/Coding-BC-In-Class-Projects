// 1) carNoise is stored globally.

const carNoise = 'Honk';
// 2) goFast is stored globally.
// 
const goFast = speed => {
  // 4) speed is assigned a value when goFast is called.
  // 
  
  // 5) makeNoise is stored locally in goFast
  //
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) in the following statement makeNoise is called and carNoise is passed into it.
  // 
  makeNoise(carNoise);
}

// 3) speed = 80.
// output: 'My speed is at 80, time to Honk'
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
