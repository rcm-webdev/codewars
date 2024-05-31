//Name: Persistent Bugger
//Difficulty: 6kyu
//tags: Fundamentals, Mathematics

//----------------------------------------------------------------
//Description:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

//----------------------------------------------------------------

//Solution:

//parameters: all valid numbers
//result: the function will stop when there is a single number product
//example: persistence(111) // 1, because 1*1*1 which is a single digit.
//psuedo code: we need a counter, loop through number, and let our program know when to stop once array.length === 1
function persistence(num) {
  //initialize counter
  let counter = 0;

  //convert number into a string so we can split
  num = num.toString();

  // loop until num is a single digit
  while (num.length > 1) {
    // Split num into its digits, reduce by multiplying, then convert back to string
    num = num
      .split("")
      .reduce((a, b) => a * b)
      .toString();
    // Increment counter for each reduction
    counter++;
  }

  return counter;
}

//repeat coding project, but without any methods

function persistence(num) {
  // Initialize counter to count the number of times we reduce the number
  let counter = 0;

  // Loop until num is a single digit
  while (num >= 10) {
    let product = 1;

    // Multiply digits of num
    while (num > 0) {
      product *= num % 10;
      num = Math.floor(num / 10);
    }

    // Update num to the product of its digits
    num = product;
    // Increment counter for each reduction
    counter++;
  }

  // Return the total number of reductions
  return counter;
}

// Example usage:
console.log(persistence(111)); // Output: 1
console.log(persistence(39)); // Output: 3 (39 -> 27 -> 14 -> 4)

//----------------------------------------------------------------

//Best Practice:

//same as above
