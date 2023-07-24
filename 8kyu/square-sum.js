//Name: Square(n) Sum
//Difficulty: 8kyu
//Tags: Fundamentals, Arrays, Lists

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.




//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function squareSum(numbers){
    const sum = numbers.map(number => number * number).reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

//Best Practices

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }