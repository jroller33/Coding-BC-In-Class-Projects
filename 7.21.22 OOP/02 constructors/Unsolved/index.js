// done: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

function Developer(name, tech) {
    this.name = name,
    this.tech = tech,
    this.introduction = () => {
        console.log(`Hi, my name is ${this.name} and I love ${this.tech}`)
    }
}
// done: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// done: Create a new object using the 'Developer' constructor

const rita = new Developer('Rita', 'Node');

rita.introduction();

// done: Call the 'introduction()' method on the new object
