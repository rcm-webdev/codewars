//Name: Isograms
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

// parameters: str is a string that contains a word that may or may not have repeating letters.
// results: This function returns a boolean indicating whether the word is an isogram (true) or not (false).
// example: isIsogram('apple') ==> false; This is not an isogram.
//pseudo code as follows:

function isIsogram(str) {
  str = str.toLowerCase(); //use toLowerCase method to make comparison case-insensitive

  for (let i = 0; i < str.length; i++) {
    // Create a loop to go through each character in the string
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      // Check if the current character appears more than once in the string
      return false; // If the character appears more than once, return false (not an isogram)
    }
  }
  return true; // If no repeating characters are found, return true (isogram)
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
