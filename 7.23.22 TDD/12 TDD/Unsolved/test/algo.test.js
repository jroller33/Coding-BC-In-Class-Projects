const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // done: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should reverse a string", () => {
      const str = "Hello world";
      const reversedStr = "dlrow olleH";

      const result = new Algo().reverse(str);

      expect(result).toEqual(reversedStr)
    })
  });

  describe("isPalindrome", () => {
    // done: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return true if string is a palindrome", () => {
      const str = "racecar";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
    })

    it("should return false if string is not a palindrome", () => {
      const str = "neon";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(false);
    })
  });

  describe("capitalize", () => {
    // done: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
      const str = "capitalize every first word of the string.";
      const capitalized = "Calitalize Every First Word Of The String";

      const result = new Algo().capitalize(str);

      expect(result).toEqual(capitalized);
    })
  });
});
