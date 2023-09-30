//Name: Count the monkeys
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, strings

//-------------------------------------------------------------------------------------------------------------------------
// Description

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function monkeyCount(n) {
  let numberOfMonkeys = [];
  for (let i = 1; i <= n; i++) {
    numberOfMonkeys.push(i);
  }

  return numberOfMonkeys;
}

//     We initialize an empty array numberOfMonkeys to store the numbers.

//     We use a for loop that starts from 1 (since you want to exclude zero) and goes up to and including the number n.

//     Inside the loop, we push each number i into the numberOfMonkeys array.

//     Finally, we return the numberOfMonkeys array containing all the numbers from 1 to n, excluding zero.

// Now, if you call monkeyCount(10), it will return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], and if you call monkeyCount(1), it will return [1], as expected.

//-------------------------------------------------------------------------------------------------------------------------

//Best Practices

// same as above
