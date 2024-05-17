//Name: Summing a number's digits
//Difficulty: 7kyu
//Tags: Fundamentals

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: all valid and a number
//results: the sum of digits in input
//example: sumDigits(12) //3
//pseudocode

function sumDigits(number) {
  let numToString = Math.abs(number)
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

  return numToString;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
