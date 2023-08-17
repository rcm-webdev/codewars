//Name: Reversed Strings
//Difficulty: 8kyu
//Tags: Fundamentals, strings

//-------------------------------------------------------------------------------------------------------------------------

// Description

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function solution(str){  
    return str.split('').reverse('').join('');    
  }

//Best Practices

function solution(str){
    return str.split('').reverse().join('');  
  }