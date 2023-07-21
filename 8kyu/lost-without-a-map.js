//Name: Lost without a map
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays

//-------------------------------------------------------------------------------------------------------------------------

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function maps(x){
    return x.map(element => element * 2)
  }

//Best Practices

function maps(x){
    return x.map(n => n * 2);
  }