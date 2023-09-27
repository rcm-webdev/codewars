//Name: pick a set of first elements
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []
// Examples

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function first(arr, n = 1) {
  if (n === 0) {
    return [];
  }

  return arr.slice(0, n);
}

//   The first function takes two parameters: arr, the input array, and n, the number of elements to extract (defaulted to 1).

//   It checks if n is equal to 0. If it is, it returns an empty array [] because you specified that when n is 0, you should return an empty sequence.

//   If n is not 0, it uses the slice method on the input array arr to extract the first n elements. The slice method takes two arguments: the start index (0 in this case, indicating the beginning of the array), and the end index (not inclusive) up to which the elements should be extracted. This effectively gives you the first n elements of the array.

// Here are some examples of how you can use this function:

var arr = ["a", "b", "c", "d", "e"];
console.log(first(arr)); // Output: ['a']
console.log(first(arr, 2)); // Output: ['a', 'b']
console.log(first(arr, 3)); // Output: ['a', 'b', 'c']
console.log(first(arr, 0)); // Output: []

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function first(arr, n = 1) {
  return arr.slice(0, n);
}
