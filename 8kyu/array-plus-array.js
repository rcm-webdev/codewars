//Name: Array Plus Array
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, Debugging

//-------------------------------------------------------------------------------------------------------------------------
// Description

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


//-------------------------------------------------------------------------------------------------------------------------

//My Solution 

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b) => a + b, 0) + arr2.reduce((a,b) => a + b, 0);
  }




//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }

//   arr1.concat(arr2): This line combines the two input arrays, arr1 and arr2, into a single array called combinedArray. The concat() method is used for concatenating arrays, and in this case, it takes all the elements from arr1 and appends them to the end of arr2, creating a new array with both sets of elements.

//   combinedArray.reduce((acc, cur) => acc + cur): After combining the arrays, this line calculates the sum of all elements in the combinedArray. It uses the reduce() method, which is used to reduce an array to a single value. In this case, we're reducing it to the sum of all elements.
//       acc (short for accumulator) is the running total of the sum.
//       cur (short for current) represents the current element being processed in the array.

//   The (acc, cur) => acc + cur function is passed to reduce(). It takes the current acc (initially set to the first element of the array) and adds the cur element to it. This process continues for each element in the array until the sum of all elements is calculated.

//   Finally, the function returns the sum, which represents the sum of all elements in the combined array.

// In summary, this function concatenates two input arrays into a single array and then calculates the sum of all the elements in that combined array using the reduce() method. It's a concise way to add up all the elements from both arrays and return the total sum.




