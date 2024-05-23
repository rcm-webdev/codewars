//Name: Spot the difference
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:

// String 1: "abcdefg"
// String 2: "abcqetg"

// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.

// NOTES:

// • If both strings are the same, return []

// • Both strings will always be the same length

// • Capitalization and punctuation matter

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: all valid inputs, strings are the same length, string inputs can include punctuation, case-sensitive
//results: expect indexes (positions) showing where the differences are, otherwise, return []
// example: spot(abcd, abde) // [2,3] string is the same length, but differs at index[2,3]
//pseudocode

function spot(s1, s2) {
  //let store the differences
  let differences = [];

  // iterate through each character of string
  for (
    let i = 0;
    i < s1.length;
    i++ //compare characters from s1 and s2
  ) {
    if (s1[i] !== s2[i]) {
      //Add indexes to the differences array if characters differ
      differences.push(i);
    }
  }

  return differences;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
