//Name: Get ascii value of character
//Difficulty: 8kyu
//Tags: Fundamentals

//-------------------------------------------------------------------------------------------------------------------------

//Description
// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function getASCII(c) {
    return c.charCodeAt(0);
  }
  
  // Usage example:
  const character = 'A'; // Change this to the character you want to get the ASCII value for
  const asciiValue = getASCII(character);
  
  console.log(`The ASCII value of ${character} is ${asciiValue}`);
  

//Best Practices

const getASCII = c => c.charCodeAt(0);