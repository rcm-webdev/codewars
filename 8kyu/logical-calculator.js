//Name: Logical Calculator
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Your Task

// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
// Examples

//     booleans = [True, True, False], operator = "AND"

//     True AND True -> True
//     True AND False -> False
//     return False

//     booleans = [True, True, False], operator = "OR"

//     True OR True -> True
//     True OR False -> True
//     return True

//     booleans = [True, True, False], operator = "XOR"

//     True XOR True -> False
//     False XOR False -> False
//     return False

// Input

//     an array of Boolean values (1 <= array_length <= 50)
//     a string specifying a logical operator: "AND", "OR", "XOR"

// Output

// A Boolean value (True or False).

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: 'texbooks' which is an array of strings. Each string represents a test subject which may contain capitalization and symbols
//returns: array sorted alphabetically in a case-insensitve manner. as far as symbols go, they are sorted based on their unicode value
//example: sorter(['History', 'Math', 'Algebra']) //['Algebra', 'History', 'Math']
//pseudocode: as follows

//parameters: array of boolean values and operator values which are rules ('AND', 'OR', or 'XOR'), the array length is between 1-50
//returns: boolean: true or false based on the operator.
//examples: function logicalCalc([true, false, false], 'XOR') //true
//pseudocode as follows

function logicalCalc(array, op) {
  //start array with the first element
  let result = array[0];

  //iterate through the array starting with the second element
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    //if using the 'AND' operator, then both values must be the same
    if (op == "AND") {
      result = result && value;
      //if using the 'OR' operator, then either value can be used
    } else if (op == "OR") {
      result = result || value;
      //if useing 'XOR' operator, then both values must be different
    } else if (op == "XOR") {
      result = result != value;
    }
  }
  return result;
}
//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

var ops = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
};

function logicalCalc(array, op) {
  return array.reduce(ops[op]);
}
