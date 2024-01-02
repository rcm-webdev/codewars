//Name: Get Number from string
//Difficulty: 8kyu
//Tags: Fundamentals, Strings

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

//pseudo code:
// parse through the string via filter (only numerical digits)
//sort them ascending order or just in order, given that this does not specify

function getNumberFromString(s) {
  const digits = Array.from(s)
    .filter((char) => !isNaN(parseInt(char)))
    .join("");

  return parseInt(digits, 10);
}

//Array.from converts string into an array
// filter through that array and filter characters that are digits
//join method is then used to convert the array back into a string
//parsInt(digits, 10) converts the collected string of digits into a number

//another approach

function getNumberFromString(s) {
  return Array.from(s)
    .filter((char) => char >= "0" && char <= "9")
    .reduce((acc, char) => acc * 10 + Number(char), 0);
}

// filter method used to retain digits by checking their Unicode values and determine if they fall within the range of numeric characters.
//reduce method then used to convert digits into a numerical value

//Best Practices

function getNumberFromString(s) {
  return Number(
    s
      .split("")
      .filter((a) => a <= "9" && a >= "0")
      .join("")
  );
}

//without regex
