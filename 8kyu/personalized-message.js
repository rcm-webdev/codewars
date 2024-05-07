//Name: Personalized Message
//Difficulty: 8kyu
//Tags: Fundamentals, strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: two separate strings: a users name and owners name.
//results: if users name === owners name, you return 'Hello Boss' otherwise 'Hello Guest'
//example greet(timmy, timmy) // 'Hello Boss'
//pseudocode

function greet(name, owner) {
  //conditional statement
  if (name !== owner) {
    return "Hello guest";
  } else {
    return "Hello boss";
  }
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function greet(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}
