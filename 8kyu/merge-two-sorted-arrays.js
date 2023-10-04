//Name: Merge two sorted arrays
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------

// Description

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// Examples (input -> output)

// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

const merge = (a, b, predicate = (a, b) => a === b) => {
  const c = [...a]; // copy to avoid side effects
  // add all items from B to copy C if they're not already present
  b.forEach((bItem) =>
    c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)
  );

  // Sort the resulting array in ascending order
  c.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  return c;
};

function mergeArrays(arr1, arr2) {
  return merge(arr1, arr2);
}

//   merge function:
//   This function takes three parameters: a, b, and predicate. It is designed to merge two arrays a and b while removing duplicates based on the provided predicate function. If no predicate function is provided, it defaults to a function that checks for strict equality (===).

// const c = [...a];:
//   This line creates a shallow copy of the first array a and assigns it to a new array c. This is done to avoid modifying the original arrays a and b to prevent side effects.

// b.forEach((bItem) => (c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)));:
//   Here, the function iterates over each element bItem in the second array b using forEach. For each bItem, it checks whether there is a matching element in the c array based on the provided predicate function. If a matching element is not found (c.some(...) returns false), the bItem is added to the c array using c.push(bItem). This effectively adds elements from b to c only if they are not already present in c, which ensures that duplicates are removed.

// c.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));:
//   After merging a and b into c, this line sorts the c array in ascending order. It uses the sort method with a comparator function that compares two elements a and b. If a is less than b, it returns -1, indicating that a should come before b. If a is greater than b, it returns 1, indicating that a should come after b. If they are equal, it returns 0, indicating no need to change their relative positions. This sorting step ensures that the final merged array c is in ascending order.

// Finally, the c array, which represents the merged and sorted result, is returned.

// This code effectively merges two arrays a and b while removing duplicates and sorting the result in ascending order, based on the provided predicate function or defaulting to strict equality. It ensures that the original arrays a and b are not modified, and the resulting array c is correctly sorted and free of duplicates.

//Best Practices

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

// arr1 and arr2:
// These are the two input arrays that you want to merge and sort in ascending order.

// arr1.concat(arr2):
// This part concatenates the two input arrays, arr1 and arr2, into a single array. It effectively combines all the elements from both arrays into one.

// .sort((a, b) => a - b):
// After concatenating the arrays, the sort method is called on the resulting array. It sorts the elements in ascending order. The sort function takes a comparison function as an argument, which compares two elements a and b. The (a, b) => a - b comparison function subtracts b from a, which is a standard way to sort elements in ascending order.

// new Set(...):
// After sorting, the resulting array may contain duplicate values. To remove duplicates, a Set is created from the sorted array. A Set is a built-in JavaScript data structure that only allows unique values. By converting the sorted array into a Set, duplicates are automatically removed.

// Array.from(...):
// Finally, the code converts the Set back into an array using Array.from(). This step is necessary because the Set data structure does not have array methods like push or concat, so it's converted back to an array for compatibility and to return the result as an array.

// The entire expression, starting from arr1.concat(arr2) and ending with Array.from(...), calculates the merged and sorted array with duplicates removed.

// The merged and sorted array is returned as the result of the mergeArrays function.

// In summary, this code takes two input arrays, arr1 and arr2, merges them, sorts the result in ascending order, and removes any duplicate values. It returns the merged, sorted, and de-duplicated array as the output.
