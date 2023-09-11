//Name: Sort and Star
//Difficulty: 8kyu
//Tags: Fundamentals, Strings, Arrays, Sortin

//-------------------------------------------------------------------------------------------------------------------------
// Description

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//-------------------------------------------------------------------------------------------------------------------------

//My Solution 
function twoSort(s) {
    // Sort the array alphabetically (case-sensitive)
    s.sort();
  
    // Get the first string from the sorted array
    const firstString = s[0];
  
    // Transform the first string by inserting "***" between each letter
    const result = firstString.split('').join('***');
  
    return result;
  }
  
  // Example usage:
  const strings = ["banana", "apple", "cherry", "date"];
  const sortedString = twoSort(strings);
  console.log(sortedString); // Output: "a***p***p***l***e"


//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }
