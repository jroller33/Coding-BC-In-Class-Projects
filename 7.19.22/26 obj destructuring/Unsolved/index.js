//                        **************finished                      

// 1. Object
const nodejs = {
  pkgName: 'Node.js',
  typeOf: 'JavaScript runtime environment',
};

// done: Destructure the object 'nodejs'
const { pkgName, typeOf } = nodejs;

console.log(pkgName); // <= Node.js
console.log(typeOf); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// done: Destructure the nested object 'js'
const {
  name,
  type,
  version,
  tools: {
    frameworks: {
      framework1, framework2
    },
    libraries: {
      library1, library2
    }
  }
} = js;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];
const [markup, style, scripting] = languages;

// done: Destructure the array 'languages'

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
