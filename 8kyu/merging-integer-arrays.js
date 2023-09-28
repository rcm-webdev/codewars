//Name: Merging sorted integer arrays (without duplicates)
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

//Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function mergeArrays(a, b) {
  // Create a new Set by spreading the elements of both arrays 'a' and 'b'.
  const mergedSet = new Set([...a, ...b]);

  // Convert the Set back to an array and sort it in ascending order.
  return Array.from(mergedSet).sort((x, y) => x - y);
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//   function mergeArrays(a, b) { ... }: This is the function declaration. It takes two sorted arrays a and b as input and aims to merge them into a single sorted array without duplicates.

//   const mergedSet = new Set([...a, ...b]);: This line creates a new Set called mergedSet. Here's what happens:
//       [...a, ...b]: The spread operator (...) is used to concatenate the elements of arrays a and b. This creates a single array with all the elements from both a and b. Duplicates are included in this step.
//       new Set([...a, ...b]): This array is passed as an argument to the Set constructor, which creates a new Set. The Set automatically removes duplicates, ensuring that only unique values are stored in mergedSet.

//   return Array.from(mergedSet).sort((x, y) => x - y);: This line converts the mergedSet Set back into an array, and then sorts it in ascending order. Here's what happens:
//       Array.from(mergedSet): The Array.from() method is used to convert the mergedSet Set into an array. This step is necessary because Sets don't maintain a specific order of elements, and we want to ensure the merged array is sorted.
//       .sort((x, y) => x - y): The sort() method is called on the resulting array. It sorts the elements in ascending order. The provided comparison function (x, y) => x - y ensures that the elements are sorted numerically. In other words, it ensures that numbers are sorted from smallest to largest.

// The end result is a merged, sorted, and deduplicated array containing all the elements from both arrays a and b. This approach leverages the Set data structure's automatic uniqueness handling and the built-in sorting capability of arrays in JavaScript to achieve the desired outcome efficiently and concisely.

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function mergeArrays(a, b) {
  let merge = [...a, ...b].sort();
  let unique = new Set(merge);
  return Array.from(unique).sort((a, b) => a - b);
}
