//Name: MakeUpperCase
//Difficulty: 8kyu
//Tags: Fundamentals, strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Write a function which converts the input string to uppercase.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: string values
//results: make each letter an uppercase letter
//example: makeUpperCase('goodbye') //GOODBYE
//pseudocode:

//use toUpperCase method
function makeUpperCase(str) {
  return str.toUpperCase();
}
//OR

//not to use a method

function makeUpperCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is a lowercase letter
    if (char >= "a" && char <= "z") {
      // Convert to uppercase by subtracting 32 from the ASCII value
      result += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      // If it's not a lowercase letter, just append the character as is
      result += char;
    }
  }

  return result;
}
//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
