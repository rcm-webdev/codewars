//Name: Convert a Boolean to a String
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: input is a boolean
//results: boolean will be converted to its string value
//examples: booleanToString(true) ==> 'true'
//pseudo code:

function booleanToString(b) {
  if (b === true) {
    //create a conditional
    return "true"; //if input is equal to the boolean, true, return that 'true' as a string
  }
  return "false"; //all other cases, return the string 'false'
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function booleanToString(b) {
  return b.toString();
}
