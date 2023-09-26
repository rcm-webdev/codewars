//Name: Count by X
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).
// Examples

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function countBy(x, n) {
  let z = [];

  for (let i = x; i <= x * n; i += x) {
    z.push(i);
  }

  return z;
}

//    The countBy function takes two arguments: x, the number whose multiples we want to generate, and n, the number of multiples to generate.

//     It initializes an empty array z to store the multiples.

//     It uses a for loop to generate the multiples:
//         let i = x: It initializes the loop counter i with the value of x, which is the starting point for generating multiples.
//         i <= x * n: It sets the loop condition to continue as long as i is less than or equal to x * n, where x * n represents the n-th multiple of x. This ensures that we generate exactly n multiples.
//         i += x: In each iteration, it adds x to i, effectively generating the next multiple of x.
//         z.push(i): It adds the current multiple i to the z array.

//     After the loop completes, the function returns the array z containing the first n multiples of x.

//   Now, when you call countBy(1, 10), it will return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], and when you call countBy(2, 5), it will return [2, 4, 6, 8, 10], as expected.

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
