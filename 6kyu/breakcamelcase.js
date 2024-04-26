//Name: break camelCase
//Difficulty: 6kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: strings
//results: simple camelCasing words are split
//example: solution(helloWorld) ==> 'hello World'
//pseudo code as follows:

function solution(string) {
  let result = ""; // create a variable to store results

  for (let i = 0; i < string.length; i++) {
    // Loop through each character in the input string
    if (string[i] === string[i].toUpperCase()) {
      // Check if the current character is uppercase
      result += " " + string[i]; // If it's uppercase, add a space followed by the uppercase character to the result
    } else {
      // If it's not uppercase (i.e., it's lowercase or not a letter)
      result += string[i]; // Just add the character to the result without any modification
    }
  }

  return result; // Return the modified string
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}
