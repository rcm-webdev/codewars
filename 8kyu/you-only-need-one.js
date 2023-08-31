

//Name: You only need one
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, Strings

//-------------------------------------------------------------------------------------------------------------------------
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


//-------------------------------------------------------------------------------------------------------------------------

//My Solution 
function check(a, x) {
    // your code here
    return a.includes(x);
  }

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices
const check = (a,x) => a.includes(x);


//Best practices made above
