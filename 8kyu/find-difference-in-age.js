//Name: Find difference in age between oldest and youngest family members
//Difficulty: 8kyu
//Tags: Algorithms, arrays

//-------------------------------------------------------------------------------------------------------------------------

// Description

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].




//-------------------------------------------------------------------------------------------------------------------------

//My Solution

function differenceInAges(ages){
    let difference= []
    let subtract = Number(Math.max(...ages) - Math.min(...ages));
    difference.push(Math.min(...ages));
    difference.push(Math.max(...ages));
    difference.push(subtract);
    return difference
  }

//Best Practices

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}