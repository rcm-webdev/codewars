//Name: Contanimation
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.
// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: string vs empty string
//results: every chararcter in the 'text' string is replaced with a single character 'char'
//example: 'text', '*' ==> '****'
//pseudo: convert string into an array using split method. create a new array that will replace all characters with char
//use join method to convert array back into a string

function contamination(text, char) {
  return text
    .split("")
    .map(() => char)
    .join("");
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function contamination(text, char) {
  return char.repeat(text.length);
}
