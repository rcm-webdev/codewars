//Name: Filter Out Geese
//Difficulty: 8kyu
//Tags: Fundamentals, Array, Lists

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.



//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
   return birds.filter((element) => !geese.includes(element));
  
  };

//   The birds array is processed using the filter method, which creates a new array based on a condition.

//   Inside the filter method, there's an arrow function (element) => !geese.includes(element). This function is applied to each element of the birds array.

//   geese.includes(element) checks if the current element name is included in the geese array. If it is included (i.e., a "goose"), geese.includes(element) will return true. The ! (logical NOT) operator is used to reverse this, making it false for geese.

//   As a result, the filter method will only include elements in the new array where the condition !geese.includes(element) is true. In other words, it will exclude the geese from the birds array.

 

//Best Practices

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  };



