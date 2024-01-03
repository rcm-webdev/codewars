//Name: Double Char
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function doubleChar(str) {
  let doubledString = ""; // Initialize an empty string to store the doubled characters

  for (let i = 0; i < str.length; i++) {
    doubledString += str.charAt(i) + str.charAt(i);
    // For each character in the input string, concatenate it with itself and add it to the doubledString
  }

  return doubledString; // Return the final string with characters repeated once
}

//Best Practices

const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
