//Name: Returning Strings
//Difficulty: 8kyu
//Tags: Fundamentals, Array

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function greet(name) {
  //if name is not provided, a user will be prompted to provide a name
  if (!name) {
    name = prompt("What is your name?");
  }
  // error message if user decides not to insert a name
  if (name === null) {
    return "User canceled the operation";
  }

  let greeting = `Hello, ${name} how are you doing today?`;
  return greeting;
}

// Function Parameter (name): The function takes an optional name parameter. If a name is provided when calling the function, it will use that name. If not, it will prompt the user for their name.

// Prompt for Name: The function uses prompt to ask the user for their name if it's not provided as a parameter. It checks if the user canceled the prompt and handles that case.

// Template String: The function uses a template string to construct the greeting. Template strings make the code more readable and allow you to embed expressions (like ${name}) directly within the string.

// Console.log: Instead of using alert, which might be intrusive, the function uses console.log for logging purposes. You can modify this to suit your needs.

// Return Statement: The function returns the greeting. In a real-world scenario, you might choose not to return anything or return a status message instead.

//Best Practices

//use case if a name was provided.
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
