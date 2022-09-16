
const fibonacci = (position) => {
  // base condition
  if (position < 2) {
    return position;
  }

  // fn calls itself
  return fibonacci(position - 1) + fibonacci(position - 2);
};

console.log(fibonacci(9));
