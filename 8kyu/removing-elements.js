//Name: Removing Elements
//Difficulty: 8kyu
//Tags: Fundamentals, arrays, lists

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!







//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function removeEveryOther(arr){
    //your code here
  
  return arr.filter((element, index) => index % 2 ==0);
     
  }

//Best Practices

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }