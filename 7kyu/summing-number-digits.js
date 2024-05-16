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

//parameters: numbers
//results: boolean (can you or can you not make it to a gas station)
//example zeroFuel = (100, 25, 1) //false
//pseudocode

const zeroFuel1 = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};
