//Name: Highest and Lowest
//Difficulty: 7kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: the 'numbers' input is a string of numbers, this always contains a number
//results: the highest and lowest number within the string with one space between these numbers (highest being listed first)
//example: highAndLow('4,3,2,1') ==> ('4 1')

function highAndLow(numbers) {
  let num = numbers.split(" ").map(Number); //split string into an array of numbers and convert each element into a number
  let highest = Math.max(...num); // Find the highest number using Math.max
  let lowest = Math.min(...num); // Find the lowest number using Math.min
  return `${highest} ${lowest}`; // Return the highest and lowest numbers as a string with a single space between them
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
