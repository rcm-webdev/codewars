//Name: Sum Mixed Array
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function sumMix(x) {
  return x.reduce((a, b) => Number(a) + Number(b), 0);
}

//Best Practices

function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}

// x is the input parameter, which is an array of mixed data types (strings and numbers).

// x.map(a => +a):
//     The map method is used to create a new array by applying a given function to each element of the original array (x in this case).
//     Inside the map method, a function (a => +a) is used as the mapping function. This function takes each element a from the original array and converts it to a number using the unary plus operator (+). The unary plus operator is used to explicitly convert a value to a number in JavaScript. So, this part of the code converts all elements of the input array to numbers.

// reduce((a, b) => a + b):
//     After using map to convert all elements to numbers, the reduce method is used to calculate the sum of all the numbers in the modified array.
//     The reduce method takes two parameters: a callback function (a, b) => a + b, and an initial value (which is not specified here, so it defaults to the first element of the array).
//     The callback function (a, b) => a + b takes two arguments a and b, which represent the accumulated value and the current element being processed, respectively.
//     Inside the callback function, a represents the accumulated sum, and b represents the current number from the array.
//     The a + b expression adds the current number b to the accumulated sum a, and the result becomes the new accumulated value for the next iteration.
//     This process continues until all elements in the array have been processed, and the final result is the sum of all the numbers.

// So, in summary, this code converts all elements of the input array to numbers using map, and then it calculates the sum of those numbers using reduce. The final result is the sum of all the values in the original array, regardless of whether they were originally represented as strings or numbers.
