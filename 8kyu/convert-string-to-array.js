//Name: Convert a string to an array
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, Strings

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function stringToArray(string){

	return string.split(' ')

}
  

//Best Practices
  
function stringToArray(string){
    return string.split(' ');
  }