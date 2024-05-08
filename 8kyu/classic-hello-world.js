//Name: Classic Hello World
//Difficulty: 8kyu
//Tags: Fundamentals, OOP

//-------------------------------------------------------------------------------------------------------------------------
//Description

// You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:

//     Solution.main("parameter1","parameter2");

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: no parameters
//results: main method should print 'Hello World!'
//example: Solution.main() //'Hello World'
//pseudocode

class Solution {
  //define static method
  static main() {
    //print 'Hello World' to console
    console.log("Hello World!");
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}
