//Name: Convert number to reverse array of digits   
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]




//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function digitize(n) {
    let list = [];
    
    // Convert the number to a string
    let numStr = n.toString();
    
    // Iterate through each character in the string
    for (let i = 0; i < numStr.length; i++) {
      // Convert the character back to a number and push it to the list
      list.push(Number(numStr[i]));
    }
    
    // Reverse the list
    list.reverse();
    
    return list;
  }

//Best Practices
  
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
