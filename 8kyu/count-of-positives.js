//Name: Count of positives and sum of negatives
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, lists

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//-------------------------------------------------------------------------------------------------------------------------

//My Solution
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  input.forEach((element) => {
    if (element > 0) {
      positiveCount++;
    } else if (element < 0) {
      negativeSum += element;
    }
  });

  return [positiveCount, negativeSum];
}

//   It first checks if the input array is empty or null. If it is, it returns an empty array as specified in the problem statement.

//   It initializes two variables, positiveCount to count the positive numbers and negativeSum to store the sum of negative numbers.

//   It then iterates through the elements of the input array using forEach.

//   Inside the loop, it checks if each element is positive (greater than 0) and increments positiveCount if true.

//   It also checks if each element is negative (less than 0) and adds it to negativeSum if true.

//   Finally, it returns an array with positiveCount as the first element and negativeSum as the second element.

// Now, when you call countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), it will return [10, -65], as expected.

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}
