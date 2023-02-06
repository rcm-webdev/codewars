//Name: Grasshopper Array Mean
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Find Mean

// Find the mean (average) of a list of numbers in an array.
// Information

// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16

// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4

// 3. The mean (or average) of this list is 4

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

var findAverage = function (nums) {
  return Number(nums.reduce((a, b) => a + b, 0)) / Number(nums.length);
};

//Best Practices

const findAverage = (nums) => nums.reduce((a, b) => a + b) / nums.length;

//Breakdown
// Define a function called findAverage that takes an array of numbers (nums) as input
const findAverage = (nums) =>
  // Use the reduce function to sum up all the elements in the array
  nums.reduce((a, b) => a + b, 0) /
  // Divide the sum by the number of elements in the array to get the average
  nums.length;

// Explanation of each part:

//     const findAverage = nums =>: This declares a function called findAverage that takes an array (nums) as an argument.

//     nums.reduce((a, b) => a + b, 0): This uses the reduce function to add up all the elements in the array. The a is the accumulator (the running sum), and b is each element in the array. The initial value of the accumulator is set to 0.

//     / nums.length: After calculating the sum, this divides it by the number of elements in the array (nums.length) to find the mean.
