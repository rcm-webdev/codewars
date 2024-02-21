//Name: Jaden Casing Strings
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//-------------------------------------------------------------------------------------------------------------------------

//Pseudo Code

// take the following string and create an array of words
// we then create a new array where we target the first character of each element - could have probably done a forEach method and push into an array (same thing was accomplished)
// then convert array back to a string using the join method.

String.prototype.toJadenCase = function () {
  let words = this.split(" ");
  let arrayOfWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return arrayOfWords.join(" ");
};

// Example usage:
const inputString = "this is a sample string";
console.log(inputString.toJadenCase()); // Output: "This Is A Sample String"

//now with the forEach method

String.prototype.toJadenCase = function () {
  let words = this.split(" ");
  let capitalizedArray = [];

  words.forEach((word) => {
    capitalizedArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  return capitalizedArray.join(" ");
};

// Example usage:
const inputStrings = "this is a sample string";
console.log(inputString.toJadenCase()); // Output: "This Is A Sample String"

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
