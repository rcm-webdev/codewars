//Name: Will you make it
//Difficulty: 8kyu
//Tags: Fundamentals, Mathematics

//-------------------------------------------------------------------------------------------------------------------------
//Description

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

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
