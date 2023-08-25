//Name: Fake Binary
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string





//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function fakeBin(x) {
    let result = '';
  
    for (let i = 0; i < x.length; i++) {
      // Convert the current character to a number
      const digit = parseInt(x[i], 10);
  
      // Check if the digit is less than 5
      if (digit < 5) {
        result += '0';
      } else {
        result += '1';
      }
    }
  
    return result;
  }
  

//Best Practices

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}