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

//now lets work through this problem without any methods

//
function sumDigits2(number) {
  //initialize sum variable
  let sum = 0;

  //handle any negative values
  if (number < 0) {
    number = -number;
  }

  //convert number to a string
  let numString = "";
  let n = number;
  while (n > 0) {
    let digit = n % 10;
    numstring = String.fromCharCode(digit + "0".charCodeAt(0)) + numString;
    n = (n - digit) / 10;
  }

  //iterate through string of number

  for (let i = 0; i < numString.length; i++) {
    sum += numString.charCodeAt(i) - "0".charCodeAt(0);
  }

  return sum;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
