//Name: Multiple of index
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Return a new array consisting of elements which are multiples of their own index in input array (length > 1).
// Some cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]




//-------------------------------------------------------------------------------------------------------------------------

//My Solution 

function multipleOfIndex(array) {
    return array.filter((x,i) => x == 0 || x % i === 0)
  }


//   array is the input array containing the elements you want to filter.

//   .filter() is an array method that creates a new array with all elements that pass the test implemented by the provided function.

//   The provided function (x, i) => x == 0 || x % i === 0 is a callback function used for filtering.

//       x represents the current element being processed during iteration.

//       i represents the index of the current element.

//   Inside the callback function:
//       x == 0 checks if the current element x is equal to 0. If it is, the element is included in the result because it's considered a multiple of its own index (index 0).
//       x % i === 0 checks if the current element x is divisible by its own index i with a remainder of 0. If it is, the element is also included in the result because it's considered a multiple of its own index.

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above

