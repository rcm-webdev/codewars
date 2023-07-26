//Name: Grasshopper Debugger
//Difficulty: 8kyu
//Tags: Fundamentals

//-------------------------------------------------------------------------------------------------------------------------

// Description

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

//parameters: valid input string
//results: string that will say Hello, insert name
//example: sayHello(Mr. Brightside) // 'Hello, Mr. Brightside'
//pseudo code

function sayHello(name) {
  //return template literal
  return `Hello, ${name}`;
}

//Best Practices
//same as above
