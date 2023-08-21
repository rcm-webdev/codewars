//Name: Invert Values
//Difficulty: 8kyu
//Tags: Fundamentals, Array, Lists

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function invert(array) {
    return array.map((element) => element *= -1);
 }

 

//Best Practices
const invert = array => array.map(num => -num);


