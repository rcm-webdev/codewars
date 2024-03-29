//Name: Exclamation Makrks
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//-------------------------------------------------------------------------------------------------------------------------

//Code + Pseudo Code

function removeExclamationMarks(s) {
  //spread operator to convert string into an array
  //then filter out '!'
  //join method
  return [...s].filter((value) => value !== "!").join("");
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function removeExclamationMarks(s) {
  return s.split("!").join("");
}
