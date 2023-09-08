//Name: Counting Sheep 
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------

// Description
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function countSheeps(sheep) {
    if (!Array.isArray(sheep)) {
      return 0; // Return 0 if the input is not an array
    }
  
    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i] === true) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
  const sheepCount = countSheeps(sheepArray);
  console.log(`Number of sheep present: ${sheepCount}`); // Output: "Number of sheep present: 17"
  

//Best Practices
  
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }