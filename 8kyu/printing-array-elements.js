//Name: Printing Array elements with Comma delimiters
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"


//-------------------------------------------------------------------------------------------------------------------------


//My Solution

function printArray(array){
    return array.join();
  }

//Best Practices
  
//same as above

// We use the join method on the array to join its elements with a comma delimiter.