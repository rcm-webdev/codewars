//Name: Calculate Average
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function findAverage(array) {
    // Check if the input array is empty or undefined
    if (!array || array.length === 0) {
      return 0;
    }
  
    // Calculate the sum of the numbers in the array using reduce
    const sum = array.reduce((acc, cur) => acc + cur, 0);
  
    // Calculate the average
    const average = sum / array.length;
  
    return average;
  }
  

//Best Practices

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }