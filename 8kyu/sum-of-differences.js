//Name: Sum of differences in array
//Difficulty: 8kyu
//Tags: Fundamentals, arrays

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
     return 0;
   }
 
   arr.sort((a, b) => b - a);
   let totalSum = 0;
 
   for (let i = 0; i < arr.length - 1; i++) {
     totalSum += arr[i] - arr[i + 1];
   }
 
   return totalSum;
 }

//Best Practices

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}