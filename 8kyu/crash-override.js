//Name: Crash Override
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.
// Notes:

//     Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

//     If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

//     Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: first and last names are strings
//results: each name will be associated with hacker name based on the first letter
// aliasGen(Jim, Gordon) ===>
//pseudo code as follows:

function aliasGen(first, last) {
  // Extract the first character of the first name and capitalize it
  let auxFirst = first[0].toUpperCase();

  // Extract the first character of the last name and capitalize it
  let auxLast = last[0].toUpperCase();

  // Check if the first character of the first name and last name exist as keys in the objects
  if (firstName[auxFirst] && surname[auxLast]) {
    // Concatenate the corresponding values from the objects to form the alias
    return firstName[auxFirst] + " " + surname[auxLast];
  } else {
    // Return an error message if either key does not exist
    return "Your name must start with a letter from A - Z.";
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above.
