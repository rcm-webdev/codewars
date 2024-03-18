//Name: Is the string uppercase
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Is the string uppercase?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ Pseudo Code

String.prototype.isUpperCase = function () {
  //started a loop and for each character to check each character in string
  //if there is a character within the string that is not uppercase, then return false
  //otherwise, return True
  for (let i = 0; i < this.length; i++) {
    const char = this.charAt(i);
    if (char !== char.toUpperCase()) {
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
