//Name: Sum of Positive
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------

// Description

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function positiveSum(arr) {
    return arr.filter((element) => element >= 1).reduce((a,b) => a + b, 0)
     
    
  }
  
//   arr.filter((element) => element >= 1): This part of the code uses the filter method on the input array arr. The filter method creates a new array containing all elements that meet the specified condition. In this case, it filters out elements that are greater than or equal to 1. So, it retains only the positive numbers (including 1).

//   .reduce((a, b) => a + b, 0): After filtering the positive numbers, the code uses the reduce method on the filtered array. The reduce method is used to accumulate values in an array and return a single result. It takes two arguments:
//       A callback function: (a, b) => a + b. This function is called for each element in the filtered array. a represents the accumulated value, and b represents the current element being processed. In this case, it's simply adding a and b.
//       An initial value: 0. This is the starting value for the accumulation.

//   So, the reduce method starts with an initial value of 0 and adds each positive number from the filtered array to the accumulated value. This effectively sums up all the positive numbers in the array.

//   Finally, the positiveSum function returns the result of the reduce operation, which is the sum of all positive numbers in the input array arr.

// In summary, the positiveSum function takes an array of numbers as input, filters out the positive numbers (greater than or equal to 1), and then returns the sum of these positive numbers.

//Best Practices

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

