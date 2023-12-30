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
//write an error if the input does not have a valid input such as alphabets (bother uppercase and lowercase) and numeric digits. Anything else such as special characters will spit out an error.

function duplicateCount(text) {}

//----------------------------------------------------------------

//Best Practice:
