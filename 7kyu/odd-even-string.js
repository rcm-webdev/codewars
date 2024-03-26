//Name: Odd-Even-String Sort
//Difficulty: 7kyu
//Tags: Fundamentals, Strings, Sort

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
// Examples

// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357

// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".

//-------------------------------------------------------------------------------------------------------------------------

//Code + Pseudo Code

function sortMyString(S) {
  //store variables even and odd
  let evenChars = "";
  let oddChars = "";

  //loop through string to sort out each value into the appropriate variable
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      evenChars += S[i];
    } else {
      oddChars += S[i];
    }
  }

  //concat with a space in between
  return evenChars + " " + oddChars;
}

//Example
let inputString = "Cdwr oeas";
sortMyString(inputString); // Code wars

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

const sortMyString = (s) => {
  let even = s
    .split("")
    .filter((v, i) => i % 2 === 0)
    .join("");
  let odd = s
    .split("")
    .filter((v, i) => i % 2 !== 0)
    .join("");
  return even + " " + odd;
};
