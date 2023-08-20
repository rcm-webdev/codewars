//Name: CSV representation of array
//Difficulty: 8kyu
//Tags: Fundamentals, Array, Lists

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.



//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function toCsvText(array) {
    // Initialize an empty string to store the CSV representation
    let csvText = '';
  
    // Loop through each row in the array
    for (let row of array) {
      // Join the elements of the row with commas and add a newline character
      csvText += row.join(',') + '\n';
    }
  
    // Remove the trailing newline character if needed
    if (array.length > 0) {
      csvText = csvText.slice(0, -1);
    }
  
    return csvText;
  }
  
  // Example usage:
  const inputArray = [
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
  ];
  
  const csvRepresentation = toCsvText(inputArray);
  console.log(csvRepresentation);
  

 

//Best Practices

function toCsvText(array) {
    return array.join('\n');
 }

