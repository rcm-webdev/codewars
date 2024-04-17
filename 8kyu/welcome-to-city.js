//Name: Welcome to City
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: strings and an array
//results: concatnated string
//examples: ['Tim', 'Timmy'], Los Angeles, California ==> 'Hello, Tim Timmy! Welcome to Los Angeles, California'
//psuedo: join array to create full name. concatnate using template literals

function sayHello(name, city, state) {
  const fullName = name.join(" ");

  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
