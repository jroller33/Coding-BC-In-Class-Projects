function Algo() {}

Algo.prototype.reverse = function(str) {
  // done: Your code here
  return str
    .split("")
    .reverse()
    .join("")
};

Algo.prototype.isPalindrome = function(str) {
  // done: Your code here
  return this.reverse(str) === str
};

Algo.prototype.capitalize = function(str) {
  // done: Your code here 
};

module.exports = Algo;
