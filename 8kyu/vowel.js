//Name: Is there a vowel in there?
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, strings

//-------------------------------------------------------------------------------------------------------------------------
// Description

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function isVow(a) {
  // This is the function definition, where 'a' is the input array of numbers.
  for (let i = 0; i < a.length; i++) {
    // This starts a for loop that iterates through each element of the input array.
    const charCode = a[i];
    // For each iteration, we store the current number in the variable 'charCode'.

    if (
      charCode === 97 ||
      charCode === 101 ||
      charCode === 105 ||
      charCode === 111 ||
      charCode === 117
    ) {
      // This is an 'if' statement that checks if 'charCode' is equal to any of the character codes of lowercase vowels:
      // 97 for 'a', 101 for 'e', 105 for 'i', 111 for 'o', and 117 for 'u'.

      a[i] = String.fromCharCode(charCode); // Convert the number to a character.
      // If the 'if' condition is true, it means 'charCode' corresponds to a vowel character code,
      // so we convert it to the corresponding character using 'String.fromCharCode()'.
      // The result is then stored back in the input array at the same index 'i'.
    }
  }
  // The for loop continues until it has iterated through all elements in the input array.

  return a; // Finally, we return the modified array.
}

const inputArray = [97, 105, 123, 111, 98];
const result = isVow(inputArray);
// We define an input array 'inputArray' and then call the 'isVow' function with this array as an argument.
// The result of the function call is stored in the 'result' variable.

console.log(result);
// We print the 'result' array to the console to see the modified array.

// Output: ['a', 'i', 123, 'o', 98]

//   In summary, this code defines a function isVow that takes an array of numbers as input. It iterates through each number in the array and checks if it corresponds to the character code of a lowercase vowel. If it does, it converts the number to the corresponding vowel character and updates the array. Finally, it returns the modified array. The example input [97, 105, 123, 111, 98] is used to demonstrate how the function works, and it produces the output ['a', 'i', 123, 'o', 98].

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

function isVow(a) {
  for (var i = 0, l = a.length; i < l; ++i) {
    var char = String.fromCharCode(a[i]);
    if ("aeiou".indexOf(char) !== -1) a[i] = char;
  }

  return a;
}

//   -------------------------
function isVow(a) {
  // This is the function definition, where 'a' is the input array of numbers.
  for (var i = 0, l = a.length; i < l; ++i) {
    // This initializes a 'for' loop that iterates through each element of the input array.
    // 'i' is the loop counter, and 'l' is the length of the array.

    var char = String.fromCharCode(a[i]);
    // For each iteration, it converts the current number 'a[i]' to a character using 'String.fromCharCode()'
    // and stores it in the variable 'char'.

    if ("aeiou".indexOf(char) !== -1) {
      // This 'if' statement checks if the character 'char' is present in the string 'aeiou'.
      // The '.indexOf()' function returns the position of 'char' in the string, or -1 if it's not found.

      a[i] = char;
      // If the character 'char' is a lowercase vowel ('a', 'e', 'i', 'o', or 'u'), it assigns 'char' to the array element at index 'i'.
    }
  }
  // The 'for' loop continues until it has iterated through all elements in the input array.

  return a;
  // Finally, the function returns the modified array.
}

//   The function isVow takes an array a as its argument, which contains numbers.

//   It initializes a for loop that iterates through each element of the input array a. The loop uses the loop counter i to keep track of the current index and l to store the length of the array.

//   Inside the loop:
//       It uses String.fromCharCode(a[i]) to convert the current number a[i] to its corresponding character and stores it in the variable char. This is done because you want to check if the character is a lowercase vowel.
//       It checks if the character char is present in the string 'aeiou' using the .indexOf() method. If char is found in the string, it will return the position (index) of char in the string; otherwise, it will return -1.
//       If char is found (i.e., its index is not -1), it means char is a lowercase vowel ('a', 'e', 'i', 'o', or 'u'). In that case, it assigns char back to the a[i] element in the input array, effectively replacing the number with the corresponding vowel character.

//   The loop continues until it has processed all elements in the input array.

//   Finally, the modified array a is returned as the result of the function.

// The result is an array with vowels replaced by their corresponding characters, while non-vowel elements remain unchanged.
