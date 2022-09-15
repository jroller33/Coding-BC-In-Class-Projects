const getInformation = (state) => ({
  information: () => console.log(state.title, state.description)
});

const lesson = function (title, description) {
  const state = {
    title: title,
    description: description,
  };

  return { ...getInformation(state) };
};

const csForJS = lesson('Module 17 - Computer Science', 'CS for JS');
csForJS.information();

// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();


// ## Acceptance Criteria

// * It's done when the `Lesson` class is a factory function, making the application less rigid in case we decide to add new features.

// * It's done when I can call the `information` method on the `Lesson` function and it correctly logs the private variable.

// ## 💡 Hints

// What scope does your inner function have access to? 

// ## 🏆 Bonus