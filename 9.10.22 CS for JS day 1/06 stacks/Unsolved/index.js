// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(container = []) {
        this.container = container;
    }
    // adds an element to the top of the stack
    addToStack(el) {
        return this.container.push(el);
    }
    // removes an element from the top of the stack
    removeFromStack() {
        return this.container.pop();
    }
}

module.exports = Stack;
