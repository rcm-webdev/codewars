//Name: Reverse Strings
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//-------------------------------------------------------------------------------------------------------------------------

//Pseudo Code

function reverseWords(str) {
  //create a variable to store an array of words from strig
  let wordsArray = str.split(" ");

  //create a variable to store the array of words, but in reverse, but how do we reverse each word?
  //we use the map function to target each word, split each one, reverse, join
  //now we have a variable stored with an array of words that are reversed
  let reversedWordArray = wordsArray.map((word) => {
    let reversedWord = word.split("").reverse().join("");
    return reversedWord;
  });

  //create a variable that will take all the reversed words and put back into one sentence.
  let reverseSentence = reversedWordArray.join(" ");

  return reverseSentence;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices
function reverseWords(str) {
  c;
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
