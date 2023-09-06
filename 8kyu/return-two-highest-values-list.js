//Name: Return two highest values list
//Difficulty: 8kyu
//Tags: Fundamentals, Lists

//-------------------------------------------------------------------------------------------------------------------------
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []



//-------------------------------------------------------------------------------------------------------------------------

//My Solution 

function twoHighest(arr) {
    // Initialize an empty array to store unique values
    let uniqueValues = [];
  
    // Loop through the input array to find unique values
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueValues.includes(arr[i])) {
        uniqueValues.push(arr[i]);
      }
    }
  
    // Sort the unique values in descending order
    uniqueValues.sort(function(a, b) {
      return b - a;
    });
  
    // Return the first two values (or fewer if there are not enough)
    return uniqueValues.slice(0, 2);
  }



  //Alternative solution
  function twoHighest(arr) {
    // Remove duplicates and get unique values
    let uniqueValues = [...new Set(arr)];
  
    // Sort unique values in descending order
    uniqueValues.sort(function(a, b) {
      return b - a;
    });
  
    // Return the first two values (or fewer if there are not enough)
    return uniqueValues.slice(0, 2);
  }
  
  

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices
function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
  }