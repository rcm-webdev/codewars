//Name: Repeat String
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//Parameters: numerical value and string
//Results: numerical represents the number of times a string must be repeated
//Example: 3, 'HelloWorld' => 'HelloWorldHelloWorldHelloWorld'
//Pseudo code: for loop and repeat 's' string until it reaches 'n' number of times or we could use the repeat method

function repeatStr(n, s) {
  let repeatString = "";

  for (let i = 0; i < n; i++) {
    repeatString += s;
  }

  return repeatString;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function repeatStr(n, s) {
  return s.repeat(n);
}
