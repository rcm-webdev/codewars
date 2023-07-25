//Name: Even or Odd
//Difficulty: 8kyu
//Tags: Fundamentals, Mathematics

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.




//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function evenOrOdd(number) {
  
    if ( Math.abs(number % 2) == 1) {
      return 'Odd'
    } else {
      return 'Even'
    }
  }

//Best Practices

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }