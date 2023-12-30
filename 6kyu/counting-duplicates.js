//Name: Counting Duplicates
//Difficulty: 6kyu
//tags: Strings and Fundamentals

//----------------------------------------------------------------
//Description:

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//----------------------------------------------------------------

//Solution:

//we are receiving an input and returning a string that analyzes the input
//the returning string will tell us the number of times a specific character (letter or number) is present in the current input
//now think of the return statement with the following notation 'once', 'twice', and from there 'three times', 'four times', ....etc
// not case sensitive
//write an error if the input does not have a valid input such as alphabets (bother uppercase and lowercase) and numeric digits. If there are no valid inputs, return 0 as there are no repeats.

function duplicateCount(text) {
  // Check if the input is a valid string
  if (typeof text !== "string" || !text.match(/[a-zA-Z0-9]/)) {
    return 0;
  }

  text = text.toLowerCase(); // Convert the input to lowercase fors case-insensitive comparison
  let charCount = {}; // Object to store character counts

  // Loop through each character in the input string
  for (let char of text) {
    // Check if the character is alphanumeric
    if (char.match(/[a-z0-9]/)) {
      // Increment the count for the character
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  let duplicates = 0;

  // Count the number of characters occurring more than once
  for (let count of Object.values(charCount)) {
    if (count > 1) {
      duplicates++;
    }
  }

  return duplicates; // Return the count of characters occurring more than once
}

// MORE CONCISE CODE for cleaner code

function duplicateCount(text) {
  // the following regular expression is used in a conditional statement to test input is valid
  if (!/^[a-zA-Z0-9]+$/.test(text)) {
    return 0;
  }

  const charCount = {}; //object to store character counts

  text
    .toLowerCase() //make case-insensitive
    .split("") //convert string into an array of characters
    //forEach method used to loop through each character in the string counting occurences using charCount object
    .forEach((char) => {
      if (char.match(/[a-z0-9]/)) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
    });
  //Object.values used to get an array of character counts
  //filter used to find counts greater than 1, essentially capturing only the counts of characters that occur more than once in the original string.
  //length method is used to obtain the count of elements in the filtered array, which represents the number of distinct characters that occur more than once.
  return Object.values(charCount).filter((count) => count > 1).length;
}

//----------------------------------------------------------------

//Best Practice:

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
