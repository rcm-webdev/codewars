//Name: Feast of Many Beasts
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//Parameters: beast and dish which are both strings
//Results: boolean, if the first letter and last letter of beast string matches with dish string, then return TRUE. False otherwise
//Examples:
//feast(rainbow trout, red velvet) //True, 'r' in rainbow and in red match && 't' in trout and velvet match
//feast(golden eagle, jello) //False, 'g' and 'j' do not match && 'e' and 'o' do no match
//Pseudo code:
//conditional if the the first letter && the last letters within the strings match , they shoudl return true, false otherwise

function feast(beast, dish) {
  if (
    beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
  ) {
    return true;
  } else {
    return false;
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
