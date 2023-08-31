//Name: Descending Order
//Difficulty: 7kyu
//Tags: Fundamentals

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



//-------------------------------------------------------------------------------------------------------------------------

//My Solution 
function descendingOrder(n) {
    // Convert the integer to a string
    let str = n.toString();
    
    // Split the string into an array of individual digits
    let digitsArray = str.split('');
    
    // Sort the array of digits in descending order
    let sortedArray = digitsArray.sort(function(a, b) {
      return b - a;
    });
    
    // Join the sorted array back into a string
    let sortedStr = sortedArray.join('');
    
    // Convert the string back to an integer
    let result = parseInt(sortedStr);
    
    return result;
  }

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }