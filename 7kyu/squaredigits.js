//Name: Square Digits
//Difficulty: 7kyu
//Tags: Fundamentals, Mathematics

//-------------------------------------------------------------------------------------------------------------------------
//Description

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution w/ PREP

//parameters: numbers, all valid inputs
//results: concatenated squared numbers
//example: squareDigits(123) // 1-4-9
//pseudo code:

function squareDigits(num) {
  //convert to string, split sting into an array, each arrach is then doubled, then join back together
  return parseInt(
    num
      .toString()
      .split("")
      .map((ele) => ele * ele)
      .join("")
  );
}

//with less methods
function squareDigits(num) {
  let result = 0;
  let factor = 1;

  while (num > 0) {
    let digit = num % 10; // Get the last digit
    let squared = digit * digit; // Square the digit

    // Place the squared digit in the correct position
    result += squared * factor;

    // Update the factor based on the squared digit
    factor *= squared < 10 ? 10 : 100;

    num = Math.floor(num / 10); // Remove the last digit from the number
  }

  return result;
}

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
} 
