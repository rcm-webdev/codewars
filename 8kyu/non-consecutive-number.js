//Name: Find the first non-consecutive number
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!



//-------------------------------------------------------------------------------------------------------------------------

//My Solution 

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        return arr[i];
      }
    }
    return null; // If the whole array is consecutive
  }

  //Here is how the code works
//   We start iterating through the array from the second element (i = 1) because there's no previous element to compare the first element against.

//   Inside the loop, we check if the current element (arr[i]) is not exactly 1 larger than the previous element (arr[i - 1]). If this condition is met, it means we have found the first non-consecutive number, so we return it.

//   If we reach the end of the loop without finding a non-consecutive number, it means the whole array is consecutive, so we return null.

// You can use this function to find the first non-consecutive number in an array of ascending unique numbers, whether they are positive or negative.


//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }



