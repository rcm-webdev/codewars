//Name: Remove Duplicates from List
//Difficulty: 8kyu
//Tags: Fundamentals, arrays, lists

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]




//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function distinct(a) {
    let uniqueArray = [];
    for (let element of a) {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    }
    return uniqueArray;
  }

//Best Practices

function distinct(a) {
    return [...new Set(a)];
  }