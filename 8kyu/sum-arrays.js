//Name: Sum Arrays
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
// Assumptions

//     You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.

// What We're Testing

// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function sum(numbers) {
  "use strict";

  let total = 0; // Initialize a variable to store the sum.

  for (let i = 0; i < numbers.length; i++) {
    // Check if the current element is a number (using the `typeof` operator).
    if (typeof numbers[i] === "number") {
      total += numbers[i]; // Add the number to the total sum.
    }
  }

  return total; // Return the total sum.
}

//   Initialize a variable total to 0. This variable will be used to store the sum of numbers in the array.

//   Use a for loop to iterate through each element of the numbers array.

//   Inside the loop:
//       Use the typeof operator to check if the current element is a number. If it's not a number, it will be skipped.
//       If the current element is a number, add it to the total sum.

//   After the loop, return the total sum.

// This code ensures that only numbers are considered when calculating the sum. If the array is empty or doesn't contain any numbers, the function will return 0.

// Here are some example usages:

console.log(sum([1, 5.2, 4, 0, -1])); // Output: 9.2
console.log(sum([])); // Output: 0
console.log(sum([-2.398])); // Output: -2.398

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
