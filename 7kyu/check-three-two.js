//Name: Check three and two
//Difficulty: 7kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
// Examples

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: all valid inputs, all inputs are strings
//results: boolean if there is more than 2 or 3, no more, no less
//example: checkThreeAndTwo(['a','b', 'b', 'a', 'a'])// true, 3x a and 2x b
//pseudocode:

function checkThreeAndTwo(array) {
  //lets initialize a counter for each letter
  let counterA = 0,
    counterB = 0,
    counterC = 0;

  //count occurences
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      counterA++;
    } else if (array[i] === "b") {
      counterB++;
    } else {
      counterC++;
    }
  }

  // Check if there are exactly three of one value and exactly two of another
  return (
    (counterA === 3 && counterB === 2) ||
    (counterA === 3 && counterC === 2) ||
    (counterB === 3 && counterA === 2) ||
    (counterB === 3 && counterC === 2) ||
    (counterC === 3 && counterA === 2) ||
    (counterC === 3 && counterB === 2)
  );
}

//lets make this code more dry

function checkThreeAndTwo(array) {
  // Initialize an object to count occurrences of each letter
  let counts = { a: 0, b: 0, c: 0 };

  // Count occurrences of each letter
  for (let i = 0; i < array.length; i++) {
    counts[array[i]]++;
  }

  // Extract the values (counts) from the object
  let values = Object.values(counts);

  // Check if the array contains exactly one '3' and one '2'
  let countOfThree = values.filter((value) => value === 3).length;
  let countOfTwo = values.filter((value) => value === 2).length;

  // Return true if there's exactly one '3' and one '2'
  return countOfThree === 1 && countOfTwo === 1;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//
