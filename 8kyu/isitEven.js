//Name: Is it even?
//Difficulty: 8kyu
//Tags: Fundamentals

//-------------------------------------------------------------------------------------------------------------------------
//Description

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: all valid inputs, each input is a number
//results: true or false for an even number
//example function testEven(12) //true
//pseudocode

function testEven(n) {
  //if number is divisble by 2 with a remainder of 0, then it must be even, so return true
  return n % 2 === 0 ? true : false;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above
