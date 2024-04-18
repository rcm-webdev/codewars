//Name: Boolean
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: bool is a boolean
//returns: strings, yes or no
//examples: true === 'yes' and false === 'No'
//pseudo: create a conditonal that will return yes if input parameter is True otherwise false
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
