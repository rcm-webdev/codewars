//Name: No Loops 2 - You only need one
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------
// Description

// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function check(a, x) {
  return a.includes(x);
}

//   a is the array you want to search in.
//   x is the value you want to check for in the array.

// The includes method checks if the given array a contains the value x. If x is found in the array, it returns true; otherwise, it returns false.

// This solution avoids explicit loops and provides a simple and concise way to check for the presence of a value in an array.

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

//same as above.
