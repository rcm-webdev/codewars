//Name: A needle in a haystack
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 



//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function findNeedle(haystack) {
    const haystackSet = new Set(haystack);
    
    if (haystackSet.has("needle")) {
      const index = haystack.findIndex(element => element === "needle");
      return `found the needle at position ${index}`;
    } else {
      return "needle not found in haystack";
    }
  }
  
  // Example usage:
  const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
  const result = findNeedle(haystack);
  console.log(result); // Output: "found the needle at position 5"
  
  

//Best Practices
  
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }