//Name: A Letter's Best Friend
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.
// Worked Example

// ("he headed to the store", "h", "e") ➞ True

// # All occurences of "h": ["he", "headed", "the"]
// # All occurences of "h" have an "e" after it.
// # Return True

// ('abcdee', 'e', 'e') ➞ False

// # For first "e" we can get "ee"
// # For second "e" we cannot have "ee"
// # Return False

// Examples

// ("i found an ounce with my hound", "o", "u") ➞ True

// ("we found your dynamite", "d", "y") ➞ False

// Notes

//     All sentences will be given in lowercase.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: all inputs are strings
//results: if all instances of 'a' are followed with 'b', then the result will be true, otherwise false
//examples: bestFriend('hello world', 'l', 'o') ==> false
//pseudo code:

function bestFriend(txt, a, b) {
  for (let i = 0; i < txt.length; i++) {
    //loop through the txt string
    if (txt[i] === a) {
      //when loop reaches 'a' and the character followed is not 'b', return false
      if (txt[i + 1] !== b) {
        return false;
      }
    }
  }

  return true; //otherwise return true
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function bestFriend(txt, a, b) {
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a && txt[i + 1] !== b) return false;
  }
  return true;
}
